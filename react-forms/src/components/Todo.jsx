import { useEffect, useState } from "react"

export const Todo = () => {
    const [ text , setText ] = useState("");
    const [todos , setTodos] = useState([]);
    const [page , setPage] = useState(1)

   useEffect(() => {
       getTodo()
   } , [page])

    const getTodo = async () => {

       let res = await fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
       let data = await res.json();
       console.log(data);
       setTodos(data);

    }
    
    const addTodo = () => {

        const payload = {
            title : text,
            status :false
        }
        fetch("http://localhost:3001/todos" ,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
               "content-type":"application/json"
           }
        }).then(() => {
            getTodo();
            setText("")
        })    
    }


    return(
        <div>
    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter Todo" />
    <button onClick={addTodo}>add</button>

    {todos.map( (e , i) => (
        <li key={i}>{e.title} </li>
    ))}

   <h3>Page : {page}</h3>
    <button disabled={page===1} onClick={() => setPage(page-1)}>Prev</button>
    <button onClick={() => setPage(page+1)}>Next</button>

    </div>
    )
}

//json-server db.json --port 3001 --watch
