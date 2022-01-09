
import './App.css';
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Route, Routes } from 'react-router-dom';
import {Contact} from "./components/Contact";
import {Navbar} from "./components/Navbar";
import {Products} from "./components/Products";
import {Users} from "./components/Users"
import { UserDetails } from "./components/UserDetails"
import {Pagenotfound} from './components/Nopage'
import {Productdetail} from"./components/Productdetail"



function App() {
  return (
    <div className="App">

      <Navbar />
   
  <Routes>
    
 <Route path="/" element={<Home />}> </Route>  

  <Route path="/about" element={<About />}> </Route>

  <Route path="/contactus" element={<Contact />}> </Route>

  <Route path="/products" element={<Products />}> </Route>

  <Route path="/users" element={<Users />}> </Route> 

  <Route path="users/:userid" element={<UserDetails/>}> </Route>

  <Route path="products/:pId" element={<Productdetail/>}> </Route>

 <Route path="*" element={<Pagenotfound />}></Route>

  </Routes>
  
    </div>
  );
}

export default App;
