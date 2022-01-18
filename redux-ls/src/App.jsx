
import './App.css';

import { Todos } from "./components/Todos"
import { Route, Routes } from 'react-router-dom';
import {Task} from "./components/Task"
import { Login } from './components/Login';
import { Home } from './Home';
import {PrivateRoute} from "./components/PrivateRoute"
 

function App() {

  return (
    <div className="App">
  
<Home />
    
    <Routes >
      <Route path='/' element={<PrivateRoute><Todos /></PrivateRoute>}></Route>
   
      <Route path='/Task/:id' element={<Task/>}></Route>

      <Route path ='login' element={<Login/>} ></Route>
    </Routes>

    </div>
  );
}

export default App;
