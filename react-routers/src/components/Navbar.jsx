import { Link } from "react-router-dom"

export const Navbar = () => {

  return(
      <div>
    
     <Link to="/" style={{margin:"10px" , color:"coral"}}>Home</Link> 

     <Link to="/about" style={{margin:"10px"  , color:"coral"}}>Dashboard</Link>

     <Link to="/contactus" style={{margin:"10px"  , color:"coral"}}>Settings</Link>

     {/* <Link to="/products/:id" style={{margin:"10px"  , color:"coral"}}>Product</Link> */}

     <Link to="/Users" style={{margin:"10px"  , color:"coral"}}>Users</Link>

     <Link to="/products"  style={{margin:"10px"  , color:"coral"}}>Products</Link>

     <Link to="/login"  style={{margin:"10px"  , color:"coral"}}>Login</Link>

      </div>
  )

}