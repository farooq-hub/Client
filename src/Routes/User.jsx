// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/User/Home" 
import Login from "../componets/Login"
import Register from "../componets/User/Register"
// import { Toaster } from 'react-hot-toast';
// <Toaster position='top-center'/>

const Role = "User";

const User = () => {
  return (
    <Routes>

        <Route path="/login" element={<Login role ={Role} url='login'/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>

        {/* { <Route path="/signup" element={}/>} */}

    </Routes>
  )
}

export default User