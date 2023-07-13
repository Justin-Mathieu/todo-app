import { createStyles, Navbar, Text, Theme} from '@mantine/core';
import { Link } from 'react-router-dom';
import Login from '../Login'

const useStyles = createStyles((Theme)=>({
navbar:{  
  backgroundColor: Theme.colors.blue[7],
height: '100%',
color:Theme.colors.gray[0],
padding: Theme.spacing.md,
}
}));

function Header(){
  const {classes} = useStyles();
  return(
  <header>
    <Navbar className={classes.navbar}>
     <Link to='/'>Home</Link>
     <Link to='/settings'>Settings</Link>
     <Login />

    </Navbar>
  </header>
  )
}
export default Header;