
import { useRef, useState } from 'react';
import './App.css';
import { Form } from './components/form';
import { Todo } from './components/Todo';
import { Effect } from './components/useeffectt';
import { Timer } from './components/Timer';

function App() {

//const inputref = useRef(null);
//const [show , setShow] = useState(true)

  return (

    <div className="App" >

      {/* <button onClick={() => {
        inputref.current.scrollIntoView({
          
        })

      }}>scroll to top</button> */}

      <Form />
      {/* <Effect /> */}
      {/* <Todo /> */}
     {/* {show ? <Timer /> : null}
 
    <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}</button> */}
    
      
    </div>
  );
}

export default App;
