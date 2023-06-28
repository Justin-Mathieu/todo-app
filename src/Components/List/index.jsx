import { useContext } from "react"


function List(){
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);


    useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
        // linter will want 'incomplete' added to dependency array unnecessarily. 
        // disable code used to avoid linter warning 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, [list]);  

    function toggleComplete(id) {

        const items = list.map( item => {
          if ( item.id === id ) {
            item.complete = ! item.complete;
          }
          return item;
        });
    
        setList(items);
    
      }

    return(
        {list.map(item => (
            <div key={item.id}>
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              <hr />
            </div>
    )
}