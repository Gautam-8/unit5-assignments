import { CartContext } from "../context/CartContext"
import { useContext } from "react"


export const Body = () => {

const { handleCartUpdate } = useContext(CartContext);

    return(
    
        <div>

     <h1>Body</h1>

    <button 

    onClick={() => handleCartUpdate(1)}
    
    >add</button>

        </div>
   


    )

}