import { Link } from "react-router-dom"

export const Users = () => {

    return (
        <div>
        
        {[1,2,3,4,5,6,7,8].map((e , i) => (
            <>
             <Link to={`/users/${e}`} >User{e}</Link><br/>
            </>
           
        ))}
           
        </div>
    )
}