import { createStyles, Navbar, Text, Theme} from '@mantine/core';

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
     <Text>Home</Text> 
    </Navbar>
  </header>
  )
}
export default Header;