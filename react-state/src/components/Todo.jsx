import { useState } from "react"
import { Todoinput } from "./Todoinput"
import { TodoItem } from "./Todoitme";
import { nanoid } from "nanoid";

export const Todo = () => {

    const [list , setList] = useState([]);

    const handleClick = (data) => {
      // console.log("parent" , data);
       const payload = {
           title : data,
           status: false,
           id: nanoid(7)
       }
        setList([...list , payload]);
        
    }

    const handleremove = (id) => {
        const changes = list.filter((e) => (
            e.id !== id
        ))
  
    setList(changes)
    }
console.log(list)
    return <>
     
     <Todoinput getData = {handleClick}/>

     {list.map( (e , i) => (
     <TodoItem key={e.id} {...e} getremove = {handleremove}/>
     
   
     ))}

    </>
}