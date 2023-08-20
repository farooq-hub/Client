import { Routes, Route,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/Login"
import Register from "../components/Provider/Register"

import ProviderHome from "../pages/Provider/Home";


const Provider = () => {
  const providerAuth = Boolean(useSelector((state) => state.provider.token));

  return (
    <Routes>
        <Route path="/login" element={providerAuth ? <Navigate to='/provider/' /> : <Login role='provider'/> }/>
        <Route path="/register" element={providerAuth ? <Navigate to='/provider/' /> : <Register/> }/>
        <Route path="/home" element={providerAuth ? <ProviderHome/> : <Navigate to='/provider/login' />}/>
        <Route path="/" element={providerAuth ? <ProviderHome/> : <Login role='provider'/>}/>
    </Routes>
  )
}
export default Provider
