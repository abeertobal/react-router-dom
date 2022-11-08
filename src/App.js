import logo from './logo.svg';
import './App.css';
import  Home from'./components/Home';
import  Link from'./components/Link';
import  About from'./components/About';
import  NavBar from'./components/NavBar';
import {BrowserRouter, Routes, Route,} 
from "react-router-dom";

function App() {
  return(
    <div className="App">

  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/Link" element={<Link />}/> 
      
      <Route path="/" element={<Home />}/>
       
      <Route path="/About" element={<About/>}/>
      </Routes> 
</BrowserRouter>

    </div>
    );
}

export default App;
