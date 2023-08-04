// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/User/Home" 
import Login from "../componets/Login"


const User = () => {
  return (
    <Routes>

        <Route path="/login" element={<Login Role ={'User'}/>}  />
        <Route path="/" element={<Home/>}/>

        {/* { <Route path="/signup" element={}/>} */}

    </Routes>
  )
}

export default User