import { useEffect, useState } from "react"
import { useRef } from "react/cjs/react.development";
import "./users.css"


export const Form = () => {

    const initial = { Name:"", age:"", department:"", address:"",maritalstatus:"---", salary:"",}

    const [form , setForm] = useState(initial);
    const ref = useRef(null);
    const [table , setTable ] = useState([]);
    const [page , setPage] = useState(1);
    let url = `http://localhost:3001/users?_page=${page}&_limit=2`;
    let url1 = "http://localhost:3001/users?_sort=salary&_order=desc";
    let url2 = "http://localhost:3001/users";

    const getUsers = async (url) => {

        let res = await fetch(url)
        let data = await res.json();
        console.log(data);
        setTable(data);
 
     }

     useEffect(() => {
         getUsers(url)
     } , [page])

    const handleChange = (e) => {
     console.log(ref.current.files)
    let {name , value} = e.target;

     if(e.target.type === "file"){
         value = ref.current.files[0].name;
     }

     if(e.target.type === "checkbox"){
         value = e.target.checked ? "✔" : "---";
     }
    

      setForm({
                ...form,
                [name] : value,
            })
   
    }

       const handleSubmit = (e) => {
        //console.log(ref.current.files)
        e.preventDefault();
        console.log(form);
       
       fetch("http://localhost:3001/users" ,{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
           "content-type":"application/json"
       }
    }).then(() => {
        getUsers(url);
       
    })
       
    }


    const deleteUser = (id) => {

        fetch(`http://localhost:3001/users/${id}` ,{
            method:"DELETE",
            headers:{
               "content-type":"application/json"
           }
        }).then(() => {
            getUsers(url);
           
        })
     }
    
    
return(
<>
    <h1>React form</h1>

<form onSubmit={handleSubmit} >

<input onChange={handleChange} name="Name" type="text" placeholder="Name"/><br/>
<input onChange={handleChange} name="age" type="number" placeholder="age"/><br/>
<input onChange={handleChange} name="address" type="text" placeholder="address"/><br/>

    <select onChange={handleChange} name="department">
        <option>select</option>
        <option value="rm">realmadrid</option>
        <option value="fcb" >barcelona</option>
        <option value="manU" >manchester united</option>
        <option value="psg" >psg</option>

    </select>

    <br/>

   <span>Marital status</span> <input onChange={handleChange} name="maritalstatus" type="checkbox"/> <br/>
   <input onChange={handleChange} name="salary" type="number" placeholder="salary"/><br/>

<input ref={ref} onChange={handleChange} type="file" name="photo"/><br/>
<input type="submit"/>


</form>

<div className="centre">

<div className="table">
<h3>Name</h3>   <h3>age</h3>  <h3>address</h3> <h3>salary</h3>  <h3>Martial Status</h3> <h3>department</h3> <h3>photo</h3>
</div>

<hr/>



{table.map((e , i) => (

<div key= {i} className="users">

   <h5>{e.Name}</h5>
    <h5>{e.age}</h5>
    <h5>{e.address}</h5>
    <h5>{e.salary}</h5>
    <h5>{e.maritalstatus}</h5>
    <h5>{e.department}</h5>
    <h5>{e.photo ? e.photo : null}</h5>
    <button onClick={() => {deleteUser(e.id)}} className="salary-flex">delete</button>
</div>
   
))}

</div>

<h3>Page : {page}</h3>
<button disabled={page===1} onClick={() => setPage(page-1)}> prev </button>
 <button  onClick={() => setPage(page+1)}> next </button>

 <button onClick={() => {getUsers(url1)}}>salary</button>

 <button onClick={() => {getUsers(url2)}}>showAll</button>


 </>
    )
}