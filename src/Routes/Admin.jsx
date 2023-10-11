import { Routes, Route,Navigate} from "react-router-dom";
import Service from "../Pages/Admin/AdminService"
import User from "../Pages/Admin/User" 
import Login from "../Components/BaseLogin"
import Provider from "../Pages/Admin/Provider";
import { useSelector } from "react-redux";
import OrderPage from "../Pages/Admin/OrderPage";
import SingleOrderPage from "../Pages/Admin/SingleOrderPage";
import HomePage from "../Pages/Admin/HomePage";


const Admin = () => {
  const adminAuth = Boolean(useSelector((state) => state.admin.token));

  return (
    <Routes>
        <Route path="/order"  element={adminAuth ? <SingleOrderPage/> : <Navigate to='/admin/login'/>}/>
        <Route path="/orders"  element={adminAuth ? <OrderPage/> : <Navigate to='/admin/login'/>}/>
        <Route path="/login" element={adminAuth ? <Navigate to='/admin' /> : <Login role='admin'  /> }/>
        <Route path="/home" element={adminAuth ? <HomePage/> : <Navigate to='/admin/login' />  }/>
        <Route path="/services" element={adminAuth ? <Service/> : <Navigate to='/admin/login' />  }/>
        <Route path="/users" element={adminAuth ? <User/> : <Navigate to='/admin/login' />  }/>
        <Route path="/providers" element={adminAuth ? <Provider/> : <Navigate to='/admin/login' />  }/>
        <Route path="/" element={adminAuth ? <HomePage/> : <Navigate to='/admin/login' />  }/> 




    </Routes>
  )
}

export default Admin