import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getUser} from "../features/auth/actions"

export const Dashboard = () => {

    const dispatch = useDispatch();

    const [query , setQuery] = useState('');
    const [avat , setAvat] = useState('');
    const token = useSelector((state) => state.authState.token);
    const username = useSelector((state) => state.authState.username);
    const profile  = useSelector((state) => state.authState.profile);

    //console.log(profile);
    
    useEffect(() => {
        dispatch(getUser(username , token))
    } , [])

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const fetchData = () => {

        axios.get(`https://api.github.com/search/users?q=${query}&page=1&per_page=10`)
        .then((res) => (console.log(res.data.items) , setAvat(res.data.items)))
        .catch((err) => console.log(err))
    }

    return(

        <div>
     
     <input type='text' placeholder="Search users"  onChange={handleQuery}  className="border-black m-10 mr-5 h-10 text-center rounded-md border-b-2 w-4/12 text-2xl"/>
     <button className="bg-sky-500 w-2/12 p-2 text-white rounded-full" onClick={() => fetchData()}>Search</button>

{profile ? <div className="">
     
     <i className="text-cyan-700 m-4 font-bold text-2xl"> Name : {profile.name}</i>
   
     <i className="text-cyan-700 m-4 font-bold text-2xl">{profile.description}</i>
   
     <i className="text-cyan-700 m-4 font-bold text-2xl">{profile.mobile}</i>
   
     <i className="text-cyan-700 m-4 font-bold text-2xl">{profile.email}</i>

</div> : null}


{avat ? <div className="m-auto w-8/12 grid  grid-cols-5 mt-5">
 
 {avat.map((e) => ( <div className="border-solid border-2">

    <img className="w-6/12 m-auto mt-3"   src={e.avatar_url}/>
<i className="text-bold text-lg">{e.login}</i>
 </div> ))}


</div> : null}
        </div>
    )
}