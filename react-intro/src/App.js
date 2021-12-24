import logo from './logo.svg';
import './App.css';
import { Mobiles, Headings } from './components/Mobiles.jsx';
import Todo from './components/Todos';
import {useState} from "react"

function App() {
  // const arr = ['spiderman1' , 'spiderman2'];
  const operatingSystem = ["Android" , "Blackberry" , "iphone" , "Windowsphone"];
  const manufacturers = ["Samsung" ,"HTC" ,"micromax","Apple"];
  const mos = "Mobile operating system";
  const mm = "Mobile manfacturers";

  const [count , setCount ] = useState(0);


  const addOne = (value) => {
    setCount(count + value);

  }

  const double = () =>{
    setCount(count * 2);

  }

  // if(count > 10 ){
  //   return <h1> Counter maxed out</h1>
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      {/* <h1 style={{ color:"red", background:"black" }}>React</h1>
      <input placeholder='hooray' style={{ textAlign:'center', width:400, height:50 ,fontSize:40}}/> */}

    {/* {arr.map((e) => (
       <><Todo num={e}>
         <h1 style = { { color:"green"} }>Watched</h1>
         
         </Todo></>
    ))} */}


<Headings m={mos}/>
   {
     operatingSystem.map((e) => (
       <Mobiles os={e} />
     ))
   }

<Headings m={mm}/>
{
     manufacturers.map((e) => (
       <Mobiles os={e} />
     ))
   }

{/* <h1> Counter: {count} </h1>
<button onClick={()=> addOne(1)} > Add 1 </button>
<button onClick={()=> addOne(-1)} > Sub 1 </button>
<h4>Counter is {count % 2 === 0 ? "Even" : "Odd"}</h4>
<h3>Double the counter</h3> 
<button onClick={()=> double()}>Double it</button>   */}


    </div>
  );
}


export default App;
