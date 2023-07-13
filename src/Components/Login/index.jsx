import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth';
import { If, Else, Then } from 'react-if';
import { Button, TextInput, Group } from '@mantine/core';

function Login(){
    const {logOut, logIn, loggedIn} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogout = ()=>{
        logOut()
        setPassword('');
        setUsername('');
    }

   return(

    <>
    <If condition={loggedIn}>
        <Then>
            <Button color='red' onClick={handleLogout}>Log Out</Button>
        </Then>
            <Else>
                <Group>
                    <TextInput
                    placeholder='Username'
                    onChange={(e)=>setUsername(e.target.value)}
                    />

                    <TextInput
                    placeholder='Password'
                    type='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button color='gray' onClick={()=>logIn(username, password)}>Log In</Button>
                </Group>
            </Else>
    </If>
    
    </>
   )
}
export default Login;