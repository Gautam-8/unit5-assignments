import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { oneTodo } from "../features/Todos/actions"
import { useEffect} from "react";



export const Task = () => {

   const { loading , task , error } = useSelector((state) =>({
      loading : state.todoState.loading,
      task: state.todoState.task,
      error: state.todoState.error,
  }));
   const {id} = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      getTask();
   } ,[])

  
      const getTask = () => {
         dispatch(oneTodo(id))
    }

         const handleToggle = () => {

            let change = false;

            if(task.status === false){
               change = true;
            }

            fetch(`http://localhost:3001/todos/${id}`,{
                 method:'PATCH',
                 body:JSON.stringify({status : change }),
                 headers:{
                     "content-type":'application/json'
                 }
             }).then((d) => d.json)

             .then((res)=> {
               dispatch(oneTodo(id))
                
             })

             .catch((err) =>{
               
             })
            
         }

         const handleDelete = () => {
            
            fetch(`http://localhost:3001/todos/${id}`,{
               method:'DELETE',
              
           }).then((d) => d.json)

           .then((res)=> {
             dispatch(oneTodo(id))
              
           })

           .catch((err) =>{
            console.log(err)
           })
          
         }
         
if(loading){
   return (<div className="text-2xl text-lime-700">Loading...</div>)
}

    if(!task.title){
       return (<div className="text-2xl text-blue-800 mt-2">
            <Link  to={"/"}> home</Link>
          
          <h1>Page not found or deleted</h1></div>)
    }
      return   (  <div className="mt-5">

     <Link className="text-2xl text-pink-800 mt-2 hover:border-black hover:border-2 hover:border-solid hover:px-5 hover:rounded-full" to={"/"}> home</Link>

       <h1 className="m-5 text-3xl underline text-sky-800">Todo</h1>
    <h1 className="text-2xl text-orange-900 animate-bounce">{task.title}</h1>
    {task.status === false? <h4 className="text-xl"> Status : <i className="text-red-800">not completed</i></h4> : <h4 className="text-xl text-green-900">Status : completed</h4>}

    <button className="transition duration-500 border-2 border-solid border-black m-2 px-2 rounded-md hover:bg-black hover:text-white ease-in-out" onClick={handleToggle}>Toggle</button>
    
    <button className="transition duration-500 border-2 border-solid border-black m-2 px-2 rounded-md hover:bg-red-900 hover:text-white ease-in-out"  onClick={handleDelete}>Remove todo</button>
       
    </div>
    )
}