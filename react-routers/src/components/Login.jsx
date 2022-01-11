import { useContext, useState } from "react/"
import { AuthContext } from "../context/Auth.Context";
import { useNavigate , useLocation } from "react-router-dom";

export const Login = () => {
    const [form ,setForm ] = useState({});
    const {handleToken } = useContext(AuthContext);
    const navigate = useNavigate();

    //const location = useLocation();
    //console.log(location)
 
    const handleChange = (e) => {

        const [name , value] = e.target.value;

        setForm({
            ...form,
            [name] : value

        });
    }

    return (
        <div>
            <input onChange={handleChange} name='email' type='text' placeholder="email" />
            <input onChange={handleChange} name='password' type='text' placeholder="password" />
           <button 
           onClick={() => {
               handleToken("sdafdsg");
               navigate("/users")}}
           
           >sign in</button>
        </div>
    )
}