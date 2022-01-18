import { Link } from "react-router-dom"


export const Home = () =>{

    return (
        <>
        <Link to={"/login"}>Login</Link>
        <Link to={'/'}>Todos</Link>
        </>
    )

}