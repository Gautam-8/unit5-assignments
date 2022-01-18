
import {Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({children}) => {
 
    const isAuth = useSelector((state) => state.authState.isAuth)

    if(!isAuth){
        return  <Navigate to={'/login'} />
    }

    return children;
    
}