import { useState } from "react/cjs/react.development"
import { GroceryInput } from "./Groceryinput"
import { Groceries } from "./Groceries"
import { nanoid } from "nanoid"

export const Grocery = () => {
 
    const [product , setProduct] = useState([])

    const handleData = (item) => {
        //console.log("parent" , item);
        const puura = {title : item  , id : nanoid(8)}
        setProduct([...product , puura])
 }

 const handleProduct = (id) => {

    const changes = product.filter((e) => (
        e.id !== id
    ));
    setProduct(changes)

 }

 console.log(product)

    return<>

       <GroceryInput  moveData={handleData}/>

       <h3>Groceries list :</h3>
      
      {product.map((e , i) => (
          <Groceries key={e.id} {...e} i={i} removeItem={handleProduct}/>
      ))}

    </>
}