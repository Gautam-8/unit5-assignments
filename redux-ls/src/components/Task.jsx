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
   return (<div>Loading...</div>)
}

    if(!task.title){
       return (<div>
            <Link to={"/"}> home</Link>
          
          <h1>Page not found or deleted</h1></div>)
    }
      return   (  <>

     <Link to={"/"}> home</Link>

       <h1>Todo</h1>
    <h1>{task.title}</h1>
    {task.status === false? <h4>not completed</h4> : <h4>completed</h4>}

    <button onClick={handleToggle}>Toggle</button>
    
    <button onClick={handleDelete}>remove todo</button>
       
       </>
    )
}