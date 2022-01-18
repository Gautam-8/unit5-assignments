
import './App.css';


import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './Home';
import {PrivateRoute} from "./components/PrivateRoute"
import { Register } from './components/Register';
import {Dashboard} from "./components/Dashboard"
  

function App() {

  return (
    <div className="App">
  
      <Home />
    
    <Routes >
      <Route path ='/' element={<Login/>} ></Route>
      <Route path="/register" element={<Register />}></Route>
      
      <Route path='/dashboard' 
      element={
          <PrivateRoute>
        <Dashboard />
     </PrivateRoute> } ></Route>

    </Routes>

    </div>
  );
}

export default App;
