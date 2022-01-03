import { useEffect, useState } from "react"

export const Effect= () => {

const [counter ,setCounter] = useState(0);
const [age , setAge] = useState(10);

// console.log(age);
// console.log(counter);

useEffect( () =>{
    console.log("age effect")
},[age])
useEffect( () =>{
    console.log("counter effect")
},[counter]);

return(
    <>
    <div>Counter: {counter}</div>
     <button onClick={() => setCounter(counter+1)}>add</button>
   
   <div>age: {age}</div>
   <button onClick={() => setAge(age+1)}>add</button>
    </>
)

}