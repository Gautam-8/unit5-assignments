import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { addTodoSuccess} from "../features/Todos/actions"
import { Link } from "react-router-dom";
import {nanoid} from "nanoid";

export const Todos = () => {

    const dispatch = useDispatch();

    const { loading , todos , error } = useSelector((state) =>({
        loading : state.todoState.loading,
        todos: state.todoState.todos,
        error: state.todoState.error,
    }));

    const [text , setText] = useState("");

    const addTodo = () => {
        const payload = {
            title : text,
            status : false,
            id : nanoid()
        }
        dispatch(addTodoSuccess(payload))
    }

  
    if(error){
        return(<div>something went wrong</div>)
    }

    return  loading ? 
    
    (<div>Loading...</div>) :
    
    (
        <div>
            <input value={text} type='text' placeholder="Enter Todo" 
            onChange={e => setText(e.target.value)} />

            <button onClick={addTodo}>ADD Todo</button>

         {loading ? <h1>"Loading" </h1>:todos.map((e , i) => (

        //   <Link key={i} to={`/Task/${e.id}`}> 
  
        //  <h4 >{e.title}</h4>
         
        //  </Link> 
        <h4><i>{e.title}</i></h4>
         )
    
       )}
         </div>    

        
    )
}