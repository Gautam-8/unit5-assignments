import { useParams ,useNavigate, Navigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth.Context";

export const UserDetails = () => {

    const { userid } = useParams();
    
    const [user , setUser ] = useState({});

    const {token} = useContext(AuthContext)

    useEffect(() => {
      fetch(`https://reqres.in/api/users/${userid}`)
      .then((d) => d.json() ).then((d) => {
        setUser(d.data)
        console.log(d.data)
      })
    } ,[userid]) ;

    // if(!token){
    //   return <Navigate to={'/login'} />
    // }

   return(
       <div>
     
       <img src={user.avatar} alt="test"/>
        <h5>{user.first_name}</h5>
        <h5>{user.last_name}</h5>
        Contact:{user.email}

       </div>
   )
}