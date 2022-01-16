import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { fetchCompleted } from "../features/Todos/actions";
import { Link } from "react-router-dom";

export const Completed = () => {

    const dispatch = useDispatch();
    const completed = useSelector((state) => state.todoState.completed)

    useEffect(() => {
        dispatch(fetchCompleted())
    } , [])

      return(
          <div>


<Link className="text-2xl text-pink-800 mt-2 hover:border-black hover:border-2 hover:border-solid hover:px-5 hover:rounded-full" to={"/"}> home</Link>
             <h1 className="text-cyan-700 underline text-2xl">Completed tasks</h1>
              
              {completed?  completed.map((e) => 
              
             <Link to={`/Task/${e.id}`}><h3 key={e.id} className="mt-5 text-xl text-orange-900 hover:underline">{e.title}</h3></Link> ): 'All are in complete'}

          </div>
         

        
      )

}