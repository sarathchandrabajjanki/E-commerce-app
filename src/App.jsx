import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";



function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>} ></Route>
      </Routes>
      </BrowserRouter>


    </div>
  )
}
export default App