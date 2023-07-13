
import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import List from '../List'
import { v4 as uuid } from 'uuid';
import { Card } from '@mantine/core';

const Todo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {
    console.log(id)
    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);  

  return (
<>
<h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
<Card shadow="sm" padding="lg" radius="md" withBorder>
          <form onSubmit={handleSubmit}>
        <Card.Section>
          <h2>Add To Do Item</h2>
        </Card.Section>

        <Card.Section>
          <label>
              <span>To Do Item</span>
              <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </label>
        </Card.Section>

        <Card.Section>
          <label>
              <span>Assigned To</span>
              <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </label>
        </Card.Section>

        <Card.Section>
           <label>
                <span>Difficulty</span>
                <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            </label>
        </Card.Section>

        <Card.Section>
            <label>
              <button type="submit">Add Item</button>
            </label>
        </Card.Section>

            </form>
  </Card>

  <List toggleComplete={toggleComplete} list={list}/>
</>
  );
};

export default Todo;