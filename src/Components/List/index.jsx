
import { useState, useContext } from "react";
import { SettingsContext } from "../../Context/Settings";
import { Pagination, Card, Badge, Text} from '@mantine/core';

function List({ list, toggleComplete }) {
const {displayCount, showComplete, sort} = useContext(SettingsContext);
const [activePage, setPage] = useState(1);

const renderList = showComplete ? list  : list.filter((item)=>!item.complete);
const pageCount = Math.ceil(renderList.length/displayCount);
const startList = displayCount * (activePage - 1);
const endList = startList + displayCount;
const displayList = renderList.slice(startList, endList);

return (
  <>
  
  {displayList.map(item => (
      <Card shadow="sm" padding="lg" radius="md" withBorder >
        <div key={item.id}>
          <Card.Section>
           
          <Badge onClick={() => toggleComplete(item.id)} >{item.complete.toString()}</Badge>
           <p>{item.assignee}</p>
          </Card.Section>
          <p>{item.text}</p>
          
          <p>Difficulty: {item.difficulty}</p>
    </div>
    </Card>
  ))}

  <Pagination value={activePage} onChange={setPage} total={pageCount}/>
  </>
)
}

export default List;