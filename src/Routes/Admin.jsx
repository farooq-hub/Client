// import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Home from "../pages/Admin/Home" 
import Service from "../pages/Admin/Service"
import User from "../pages/Admin/User" 
import Login from "../components/Login"
import Provider from "../pages/Admin/Provider";
import { useSelector } from "react-redux";


const Admin = () => {
  const userAuth = Boolean(useSelector((state) => state.admin.token));

  return (
    <Routes>
        <Route path="/login" element={userAuth ? <Navigate to='/admin' /> : <Login role='admin'  url= '/admin/login' /> }/>
        <Route path="/home" element={userAuth ? <Home/> : <Navigate to='/admin/login' />  }/>
        <Route path="/services" element={userAuth ? <Service/> : <Navigate to='/admin/login' />  }/>
        <Route path="/users" element={userAuth ? <User/> : <Navigate to='/admin/login' />  }/>
        <Route path="/providers" element={userAuth ? <Provider/> : <Navigate to='/admin/login' />  }/>
        <Route path="/" element={userAuth ? <Home/> : <Navigate to='/admin/login' />  }/> 




    </Routes>
  )
}

export default Admin