import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export const Productdetail = () => {

    const { pId } = useParams();
   
    
    const [ product , setProduct ] = useState(null)

    useEffect(() => {
      fetch(`http://localhost:3001/products/${pId}`)
      .then((d) => d.json() ).then((d) => {

      if(d.name){
          setProduct(d)
      }else{
          setProduct(null)
      }
        
        console.log(d)
      }).catch((error) => {console.log(error.message)})
    } ,[pId]) 

   return(
       <div>
     
     {product ? <div>

        <h1>{"Product:" + product.name}</h1>

       <h4>{ "price:" + product.price}</h4>

       <h5>{"id:" +product.id}</h5>

         </div>
     
     : <h2>product doesnot exist</h2>}
       

       </div>
   )
}