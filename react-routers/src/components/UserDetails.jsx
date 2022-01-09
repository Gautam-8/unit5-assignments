import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export const UserDetails = () => {

    const { userid } = useParams();
    
    const [user , setUser ] = useState({})

    useEffect(() => {
      fetch(`https://reqres.in/api/users/${userid}`)
      .then((d) => d.json() ).then((d) => {
        setUser(d.data)
        console.log(d.data)
      })
    } ,[userid]) 

   return(
       <div>
     
       <img src={user.avatar} />
        <h5>{user.first_name}</h5>

       </div>
   )
}