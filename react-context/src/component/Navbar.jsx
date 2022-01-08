import { useContext } from "react/cjs/react.development"
import { ThemeContext } from "../context/Themecontext"
import { Cart } from "./Cart"

export const Navbar = () => {

const {theme , toggleTheme} = useContext(ThemeContext)

    return(
    <div>

         <h1>Navbar</h1>

          <h1> Theme : {theme}</h1>
          
          <button 
           
           onClick={() => {toggleTheme()}}
           
          >Theme mode</button>

         <Cart />

    </div>
    
        )
}