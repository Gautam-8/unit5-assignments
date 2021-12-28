
import { useState } from "react/cjs/react.development"

export const GroceryInput = ({moveData}) => {

    const [item , setItem] = useState("")

    const handleChange = (e) => {
        setItem(e.target.value);
   }
   const handleClick = () => {
       moveData(item)
   }

    return <>
    
    <input placeholder="add Grocery" type="text" onChange={handleChange}/>
    <button onClick={handleClick}>ADD</button>
    
    </>


}