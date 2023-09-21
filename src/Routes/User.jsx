// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Login from "../components/Login"
import Register from "../components/User/Register"
import { useSelector } from "react-redux";
import OtpLogin from "../components/OtpLogin";
import ProfilePage from "../pages/User/Profile";
import ProvidersPage from "../pages/User/Providers";
import HomePage from "../pages/User/HomePage";



const User = () => {
  const userAuth = Boolean(useSelector((state) => state.user.token));

  return (
    <Routes>
        <Route path="/profile" element={userAuth ? <ProfilePage/> : <Navigate to='/login' /> }/>
        <Route path="/providers" element={userAuth ? <ProvidersPage/> : <Navigate to='/login' /> }/>
        <Route path="/otpLogin" element={userAuth ? <Navigate to='/' /> : <OtpLogin role='user'/> }/>
        <Route path="/login" element={userAuth ? <Navigate to='/' /> : <Login role='user'/> }/>
        <Route path="/register"  element={userAuth ? <Navigate to='/' /> : <Register />}/>
        <Route path="/" element={<HomePage/>}/>

    </Routes>
  )
}

export default User