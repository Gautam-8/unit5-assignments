import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

 export const AuthContextProvider = ({children}) => {

    const [login , setLogin] = useState({email:"" , password:""});

    const handleChange = (e) => {
  
   const {name , value} = e.target;

    setLogin({
     ...login,
     [name] : value

 });

    }
    const handleSubmit =  (e) => {
        e.preventDefault();
    
        const check = async () => {
          let res = await fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(login),
            headers:{
              "content-type":"application/json"
            }
          });
    
          let t = await res.json();
          console.log(t);
          setIsAuth(t.token)
          
        }
        check();

       
      }

    const [isAuth , setIsAuth] = useState(false)

    return <AuthContext.Provider value={{isAuth , handleChange , login , handleSubmit}}>{children}</AuthContext.Provider>
}