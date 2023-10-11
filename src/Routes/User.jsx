// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import BaseLogin from "../Components/BaseLogin"
import Register from "../Components/User/Register"
import { useSelector } from "react-redux";
import OtpLogin from "../Components/OtpLogin";
import ProfilePage from "../Pages/User/Profile";
import ProvidersPage from "../Pages/User/Providers";
import HomePage from "../Pages/User/HomePage";
import CheckoutPage from "../Pages/User/CheckOut";
import PyamentPage from "../Pages/User/PyamentPage";
import OrderPage from "../Pages/User/OrderPage";
import SingleOrderPage from "../Pages/User/SingleOrderPage";
import ChatPage from "../Pages/User/ChatPage";
import SingleProviderPage from "../Pages/User/SingleProviderPage";




const User = () => {
  const userAuth = Boolean(useSelector((state) => state.user.token));
  return (
    <Routes>
        <Route path="/chats"  element={userAuth ? <ChatPage/> : <Navigate to='/login'/>}/>
        <Route path="/order"  element={userAuth ? <SingleOrderPage/> : <Navigate to='/login'/>}/>
        <Route path="/orders"  element={userAuth ? <OrderPage/> : <Navigate to='/login'/>}/>
        <Route path="/payments"  element={userAuth ? <PyamentPage/> : <Navigate to='/login'/>}/>
        <Route path="/profile" element={userAuth ? <ProfilePage/> : <Navigate to='/login' /> }/>
        <Route path="/providers/:providerId" element={userAuth ? <SingleProviderPage/> : <Navigate to='/login' /> }/>
        <Route path="/providers" element={userAuth ? <ProvidersPage/> : <Navigate to='/login' /> }/>
        <Route path="/providers/checkout" element={userAuth ? <CheckoutPage/> : <Navigate to='/login' /> }/>
        <Route path="/otpLogin" element={userAuth ? <Navigate to='/' /> : <OtpLogin role='user'/> }/>
        <Route path="/login" element={userAuth ? <Navigate to='/' /> : <BaseLogin role='user'/> }/>
        <Route path="/register"  element={userAuth ? <Navigate to='/' /> : <Register />}/>
        <Route path="/" element={userAuth ? <HomePage/> :<Navigate to='/login'/>}/>

    </Routes>
  )
}

export default User