import React from 'react';
import {useState, useEffect} from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

function AuthProvider({children}){
const [loggedIn, setloggedIn] = useState(false);
const [user, setUser] = useState({});
const [error, setError] = useState();





useEffect(()=>{
    const cookieToken = cookie.load('auth');
    validateToken(cookieToken)
}, []);

function validateToken(token){
    console.log(token)
    try{
            let valid = jwt_decode(token)
    if(valid){
        cookie.save('auth', token)
        setUser(valid);
        setloggedIn(true)
    }
    }
    catch(error){
        setError(error);

    }

}

function logOut(){
    setUser({});
    setloggedIn(false);
    cookie.remove('auth');
}

async function logIn (username, password){
    console.log(username, password)
    let config = {
        baseURL: 'https://api-js401.herokuapp.com',
        url:'/signin',
        method: 'post',
        auth: {username, password}
    }
    let response = await axios(config);
    console.log(response)
    let user = response.data;
    if(user){
        try{
            validateToken(user.token);
        }
        catch(error){
            console.log(error)
            setError(error)
        }
    }
}

function roleCapability(capability){
    console.log(capability)
   return user?.capability?.includes(capability)
}
const values = {
    loggedIn,
    user,
    error,
    logIn,
    logOut,
    roleCapability,

}
return(
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
)

}
export default AuthProvider;