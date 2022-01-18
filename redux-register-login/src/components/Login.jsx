import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin} from "../features/auth/actions";



export const Login = () => {

    const navigate = useNavigate();

    const isAuth = useSelector((state) => state.authState.isAuth);
    const error = useSelector((state) => state.authState.error);
    const dispatch = useDispatch();
    //console.log(isAuth)
   
    const [form , setForm ] = useState({username:"" , password:""});

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
        dispatch(userLogin(form));
        
        setTimeout(() => {
           navigate('/dashboard') 
        },2000)
 }

 

    return(
        <>
       <h2 className="text-3xl text-sky-800 mt-10 underline hover:animate-bounce transition duration-500" >Login</h2>
        <form className="mt-5" onSubmit={handleSubmit}>

        <input onChange={handleChange} name="username" placeholder="username" type="text" className="border-2 border-black m-2 text-center rounded-md"/>
        <br />
        <input onChange={handleChange} name="password" placeholder="password" type="text" className="border-2 border-black m-2 text-center rounded-md"/>
        <br />
        <input type="submit" className=" text-gray-50 bg-teal-500 w-2/12 p-2 rounded-3xl  hover:bg-orange-400 cursor-pointer"/>

        </form>

        {error ? <h4>please provide correct credentials </h4> : null } 
        

        </>
    )
}