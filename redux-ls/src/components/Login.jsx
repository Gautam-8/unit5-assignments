import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../features/auth/actions";
import {Navigate, useNavigate} from "react-router-dom"
import axios from "axios";

export const Login = () => {

    const isAuth = useSelector((state) => state.authState.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //console.log(isAuth)
   
    const [form , setForm ] = useState({email:"" , password:""});

    const handleChange = (e) => {

        const {value , name } = e.target;

        setForm({
            ...form,
            [name] : value

        })
    }

    const handleSubmit = (e) => {
          e.preventDefault()
        console.log(form);
   
        // fetch("https://reqres.in/api/login",{
        //      method:'POST',
        //      body:JSON.stringify(form),
        //      headers:{
        //          "content-type":'application/json'
        //      }
        //  }).then((d) => d.json())

        //  .then((res)=> {
        //     dispatch(loginSuccess(res.token));
            
        //  })

        //  .catch((err) =>{
        //     dispatch(loginFailure(err))
        //  })


     axios.post("https://reqres.in/api/login" , form)
     .then((res) => (   dispatch(loginSuccess(res.data.token)) , navigate('/') ))
     .catch((error) => 
     dispatch(loginFailure(error)),
     )
 }


    
    return(
        
        <>
       <h3>Login form</h3>
        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} name="email" placeholder="email" type="text"/>
        <br />
        <input onChange={handleChange} name="password" placeholder="password" type="text" />
        <input type="submit" />

        </form>
        
        </>
    )
}