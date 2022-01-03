import { useEffect, useState } from "react"

export const Timer = () => {

 const [counter , setCounter ] = useState(10);

 useEffect( () => {
 const id =  setInterval( () => {
        setCounter( (p) => { 
           if(p === 0){
            clearInterval(id);
            return 0
        }
        return p-1;
 }) ;
    } , 1000);

    return () => {
        console.log("Unmounted");
        clearInterval(id);
    }
     
 } ,[]);

 
 return (
     <div>Timer : {counter}  </div>
 )

}