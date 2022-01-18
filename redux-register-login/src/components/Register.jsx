import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userRegister} from "../features/auth/actions"
import { Navigate, useNavigate } from "react-router-dom";


export const Register = () => {

    const dispatch = useDispatch();


    const regError = useSelector((state) => state.authState.regError);
  

    const [regform , setRegform ] = useState({email:"" , password:"",name:"",mobile:"",username:"",description:"legendary redux"});

    const handleChange = (e) => {
     const {value , name } = e.target;
       setRegform({
            ...regform,
            [name] : value

        })
    }

    const handleSubmit = async (e) => {
          e.preventDefault()
        console.log(regform);
   
    dispatch(userRegister(regform));

 }




    return(
        
        <>
       <h3 className="text-3xl text-sky-800 m-10 underline hover:animate-bounce transition duration-500">Register</h3>

        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} name="email" placeholder="email" type="text" className="border-2 border-black m-2 text-center rounded-md"/>
        <br />
        <input onChange={handleChange} name="password" placeholder="password" type="text" className="border-2 border-black m-2 text-center rounded-md"/>
        <br />
        <input onChange={handleChange} name="name" placeholder="name" type="text" className="border-2 border-black m-2 text-center rounded-md"/>
        <br />
        <input onChange={handleChange} name="username" placeholder="username" type="text" className="border-2 border-black m-2 text-center rounded-md" />
        <br />
        <input onChange={handleChange} name="mobile" placeholder="mobile" type="number" className="border-2 border-black m-2 text-center rounded-md"/>
        <br />
        
        <input type="submit" className=" text-gray-50 bg-teal-500 w-2/12 p-2 rounded-3xl  hover:bg-orange-400 cursor-pointer"/>

        </form>

        
        
        </>
    )
}