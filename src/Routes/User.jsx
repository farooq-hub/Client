// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Login from "../components/Login"
import Register from "../components/User/Register"
import { useSelector } from "react-redux";
import OtpLogin from "../components/OtpLogin";
import ProfilePage from "../pages/User/Profile";
import ProvidersPage from "../pages/User/Providers";
import HomePage from "../pages/User/HomePage";
import CheckoutPage from "../pages/User/CheckOut";
import PyamentPage from "../pages/User/PyamentPage";
import OrderPage from "../pages/User/OrderPage";
import SingleOrderPage from "../pages/User/SingleOrderPage";



const User = () => {
  const userAuth = Boolean(useSelector((state) => state.user.token));
  return (
    <Routes>
        <Route path="/order"  element={userAuth ? <SingleOrderPage/> : <Navigate to='/login'/>}/>
        <Route path="/orders"  element={userAuth ? <OrderPage/> : <Navigate to='/login'/>}/>
        <Route path="/payments"  element={userAuth ? <PyamentPage/> : <Navigate to='/login'/>}/>
        <Route path="/profile" element={userAuth ? <ProfilePage/> : <Navigate to='/login' /> }/>
        <Route path="/providers" element={userAuth ? <ProvidersPage/> : <Navigate to='/login' /> }/>
        <Route path="/providers/checkout" element={userAuth ? <CheckoutPage/> : <Navigate to='/login' /> }/>
        <Route path="/otpLogin" element={userAuth ? <Navigate to='/' /> : <OtpLogin role='user'/> }/>
        <Route path="/login" element={userAuth ? <Navigate to='/' /> : <Login role='user'/> }/>
        <Route path="/register"  element={userAuth ? <Navigate to='/' /> : <Register />}/>
        <Route path="/" element={<HomePage/>}/>

    </Routes>
  )
}

export default User