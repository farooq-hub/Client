// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Home from "../pages/Admin/Home" 
import Service from "../pages/Admin/Service"
import User from "../pages/Admin/User" 
import Login from "../components/Login"
import Provider from "../pages/Admin/Provider";
import { useSelector } from "react-redux";
import OrderPage from "../pages/Admin/OrderPage";
import SingleOrderPage from "../pages/Admin/SingleOrderPage";


const Admin = () => {
  const adminAuth = Boolean(useSelector((state) => state.admin.token));

  return (
    <Routes>
        <Route path="/order"  element={adminAuth ? <SingleOrderPage/> : <Navigate to='/admin/login'/>}/>
        <Route path="/orders"  element={adminAuth ? <OrderPage/> : <Navigate to='/admin/login'/>}/>
        <Route path="/login" element={adminAuth ? <Navigate to='/admin' /> : <Login role='admin'  /> }/>
        <Route path="/home" element={adminAuth ? <Home/> : <Navigate to='/admin/login' />  }/>
        <Route path="/services" element={adminAuth ? <Service/> : <Navigate to='/admin/login' />  }/>
        <Route path="/users" element={adminAuth ? <User/> : <Navigate to='/admin/login' />  }/>
        <Route path="/providers" element={adminAuth ? <Provider/> : <Navigate to='/admin/login' />  }/>
        <Route path="/" element={adminAuth ? <Home/> : <Navigate to='/admin/login' />  }/> 




    </Routes>
  )
}

export default Admin