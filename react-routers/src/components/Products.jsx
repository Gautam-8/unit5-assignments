import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {

const [item , setItem] = useState(null);

const getProducts = async () => {
    let res = await fetch("http://localhost:3001/products");
    let data = await res.json();

    console.log(data)
   
    setItem(data);
   
    }

    useEffect(() => {
        getProducts()
    } , [])


 return (
     <div>
    {/* <button onClick={(() => getProducts())}>GetProducts</button> */}

    {item ? item.map( (e) => (

        <Link to={`/products/${e.id}`} key={e.id}
        ><h1 >{e.name}</h1></Link>

    
    )) 
    : null}
     </div>
 )

}