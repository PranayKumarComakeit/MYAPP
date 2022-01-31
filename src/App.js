import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const [obj, setobj] = useState("light");
  const getdatafromform=(formdata)=>{
    console.log(formdata);
   
  }
const [mode, setmode] = useState("light");
const [switchname, setswitchname] = useState("Enable dark Mode");
const togglemode=()=>
{
  if(mode==="light")
  {
  setmode("dark");
  setswitchname("Disable Dark Mode");
  document.body.style.backgroundColor='#35445c';
  }
  else
  { 
    setswitchname("Enable Dark Mode");
    setmode("light");
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
    <Navbar mode={mode} toggle={togglemode} switchname={switchname} />
     <Router>
        <Routes>
    <Route path='/' element={<Home mode={mode}/>} />
    <Route path='/login' element={<Login getdatafromform={getdatafromform}/>} />
    </Routes>
    </Router> 
    </>
  );
}
export default App;