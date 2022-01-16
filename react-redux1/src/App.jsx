
import './App.css';

import { Todos } from "./components/Todos"
import { Route, Routes } from 'react-router-dom';
import {Task} from "./components/Task"
import {Counter} from "./components/Counter"


function App() {

  return (
    <div className="App">
  
  {/* <Counter /> */}
    
    <Routes >
      <Route path='/' element={<Todos />}></Route>
    
      <Route path='/Task/:id' element={<Task/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
