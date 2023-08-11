// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Home from "../pages/User/home"; 
import Login from "../components/Login"
import Register from "../components/User/Register"
import { useSelector } from "react-redux";



const User = () => {
  const userAuth = Boolean(useSelector((state) => state.user.token));

  return (
    <Routes>
        <Route path="/login" element={userAuth ? <Navigate to='/' /> : <Login role='user'  url= '/login' /> }/>
        <Route path="/register"  element={userAuth ? <Navigate to='/' /> : <Register />}/>
        <Route path="/" element={<Home/>}/>

    </Routes>
  )
}

export default User