import { addCounter } from "../features/Counter/actions";
import { useSelector,useDispatch } from "react-redux";


export const Counter = () => {
    const counter = useSelector((state) => state.counterState.counter); 
    const dispatch = useDispatch();


    return (
        <div>
              <h1>Counter : {counter}</h1>

<button onClick={() =>{
  dispatch(addCounter(1))
}}>Add 1</button>
        </div>
    )
}