import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";



function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>} ></Route>
      </Routes>
      </BrowserRouter>


    </div>
  )
}
export default App