
import { useContext } from "react";
import {AuthContext} from '../../Context/Auth'
import { When } from 'react-if'

function Auth({capability, children}){
    const {loggedIn, roleCapability} = useContext(AuthContext);

return(
    <When condition={loggedIn && roleCapability(capability)}>
        {children }
    </When>
)
}
export default Auth;