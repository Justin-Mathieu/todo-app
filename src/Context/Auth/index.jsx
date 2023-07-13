import React from 'react';
import {useState, useContext, useEffect} from 'react';
import testUsers from './lib/user';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

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
    try{
            let valid = jwt_decode(token)
    if(valid){
        cookie.save(valid)
        setUser(token);
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
}

function logIn(username, password){
    let user = testUsers[username];
    if(user && user.password === password){
        try{
            validateToken(user.token);
        }
        catch(error){
            setError(error)
        }
    }
}

function roleCapability(capability){
   return user?.capability.includes(capability)
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