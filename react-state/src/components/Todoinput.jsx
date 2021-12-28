
import { useState } from "react";

export const Todoinput = ({getData}) => {

const [text , setText ] = useState("")

const handleChange = (e) => {
    //console.log(e.target.value)
    setText(e.target.value)
}

const handleClick = () => {
    // console.log(text);
    // alert(`ti${text}`)
    getData(text)
}

    return <>
    
    <input type="text" placeholder="Enter todo" onChange={handleChange}></input>
     <button onClick={handleClick}>Add todo</button>
    
    </>
}

