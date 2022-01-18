import { Link } from "react-router-dom"


export const Home = () =>{

    return (
       <div className="mt-2">
         <Link to={'/'} className="m-2 p-5 pt-10 rounded-b-full text-orange-600 underline text-2xl transition hover:duration-600 hover:bg-orange-500 hover:text-white">login</Link>
         <Link to={'/register'} className="m-2 p-5 rounded-b-full text-orange-600 underline text-2xl transition hover:duration-600 hover:bg-orange-500 hover:text-white">register</Link>
         <Link to={'/dashboard'} className="m-2 p-5 rounded-b-full text-orange-600 underline text-2xl transition hover:duration-600 hover:bg-orange-500 hover:text-white">dashboard</Link>
         </div>
    )

}