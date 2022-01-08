import { useContext, useState } from "react"
import { AuthContext , AuthContextProvider} from "../context/AuthContext"

export const Form = () => {

const { isAuth , handleChange , handleSubmit} = useContext(AuthContext)

    return (
    <>

<form onSubmit={handleSubmit}>

<input onChange={handleChange}  name="email" type='text' placeholder="email"/> <br />
<input onChange={handleChange} name="password" type="text" placeholder="password"/> <br />
  <input type="submit" />

  <h1>{isAuth ? "Login success  token:"+isAuth : "not signed in"}</h1>

</form>


   
    
    
    </>
    )
}