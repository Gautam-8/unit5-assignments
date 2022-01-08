import { CartContext } from "../context/CartContext"
import { useContext } from "react"


export const Cart = () => {

    const {cart} = useContext(CartContext)
    return<h1>CartItems:{cart}</h1>
}