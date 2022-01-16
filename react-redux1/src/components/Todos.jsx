import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getData, addTodo } from "../features/Todos/actions"
import { Link } from "react-router-dom";

export const Todos = () => {

    const dispatch = useDispatch();

    const { loading , todos , error } = useSelector((state) =>({
        loading : state.todoState.loading,
        todos: state.todoState.todos,
        error: state.todoState.error,
    }));

    const [text , setText] = useState("");

    useEffect(() => {
     getdata();
     } , [])

    const getdata = () =>{
        dispatch(getData())
   }

    if(error){
        return(<div>something went wrong</div>)
    }

    return  loading ? 
    
    (<div>Loading...</div>) :
    
    (
        <div>
            <input value={text} type='text' placeholder="Enter Todo" className="ml-12 border-solid border-2 border-black rounded-xl text-center w-2/12"
            onChange={e => setText(e.target.value)} />

            <button onClick={ () => dispatch(addTodo(text))} className="bg-cyan-600 p-2 text-white ml-2 rounded-full"
            
             >ADD Todo</button>

         {loading ? <h1>"Loading" </h1>:todos.map((e , i) => (

          <Link key={i} to={`/Task/${e.id}`} className="m-auto  text-2xl"> 
  
         <h4 className="w-fit m-auto mt-5 text-amber-700  underline hover:text-teal-600 hover:font-bold hover:transition duration-500 hover:text-3xl">{e.title}</h4>
         
         </Link> 
         )
    
       )}
         </div>    

        
    )
}