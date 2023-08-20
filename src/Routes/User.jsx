// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Home from "../pages/User/home"; 
import Login from "../components/Login"
import Register from "../components/User/Register"
import { useSelector } from "react-redux";
import OtpLogin from "../components/OtpLogin";



const User = () => {
  const userAuth = Boolean(useSelector((state) => state.user.token));

  return (
    <Routes>
        <Route path="/otpLogin" element={userAuth ? <Navigate to='/' /> : <OtpLogin role='user'/> }/>
        <Route path="/login" element={userAuth ? <Navigate to='/' /> : <Login role='user'/> }/>
        <Route path="/register"  element={userAuth ? <Navigate to='/' /> : <Register />}/>
        <Route path="/" element={<Home/>}/>

    </Routes>
  )
}

export default User