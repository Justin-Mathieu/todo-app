
import { useState, useContext } from "react";
import { SettingsContext } from "../../Context/Settings";
import { Pagination, Card, Badge, Text, Button, CloseButton} from '@mantine/core';
import {If, Else, Then} from 'react-if';
import { AuthContext } from "../../Context/Auth";
import Auth from '../auth'

function List({ list, toggleComplete, deleteItem }) {
  const {loggedIn, roleCapability} = useContext(AuthContext)
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
  
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div key={item._id}>
          <Card.Section>
           <If condition={loggedIn && roleCapability('update')}>
            <Then>
              <Badge >
            <Button onClick={() => toggleComplete(item)}>
              {item.complete.toString()}
             </Button>
          </Badge>
            </Then>
         <Else>
          <Badge variant="filled"/>
         </Else>
         </If>
           <p>{item.assignee}</p>
          </Card.Section>
          <p>{item.text}</p>
          <p>Difficulty: {item.difficulty}</p>
          <Button onClick={()=> deleteItem(item._id)}
      title="close todo">close</Button>
    </div>
    <Auth capability={'delete'}>
      
    </Auth>
    </Card>
  ))}

  <Pagination value={activePage} onChange={setPage} total={pageCount}/>
  </>
)
}

export default List;