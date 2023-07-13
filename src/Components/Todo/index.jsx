
import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import List from '../List'
import { Card } from '@mantine/core';
import axios from 'axios';

const Todo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

   async function addItem(item) {
    console.log(item)
     item.complete = false;
    let config = {
      baseURL: 'https://api-js401.herokuapp.com/api/v1/todo',
      method: 'post',
      data: item
    }
     let response = await axios(config)
    console.log(response.data, item);
    setList([...list, item]);
  }

  async function deleteItem(id) {
    console.log(id)
    axios.delete(`https://api-js401.herokuapp.com/api/v1/todo/${id}`)
    const items = list.filter( item => item._id !== id );
    setList(items);
  }

  async function toggleComplete(itemUpdate) {
    let config = {
      BaseURL: 'https://api-js401.herokuapp.com/api/v1/todo',
      method: 'put',
      data: itemUpdate
    }
    await axios(config)
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
    let items = response.data.results;
    
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);  


  useEffect(()=>{
(async ()=>{
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  console.log(response)
  setList(response.data.results);
})()
  }, []);

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

  <List toggleComplete={toggleComplete} list={list} deleteItem={deleteItem}/>
</>
  );
};

export default Todo;