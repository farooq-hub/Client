import { Routes, Route,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/Login"
// import Register from "../components/Provider/Register"

import ProviderHome from "../pages/Provider/Home";


const Provider = () => {
  const providerAuth = Boolean(useSelector((state) => state.provider.token));

  return (
    <Routes>
        <Route path="/login" element={providerAuth ? <Navigate to='/' /> : <Login role='provider'  url= '/provider/login' /> }/>
        <Route path="/Register" element={providerAuth ? <Navigate to='/' /> : <Login role='provider'  url= '/provider/login' /> }/>
        <Route path="/home" element={providerAuth ? <ProviderHome/> : <Navigate to='/provider/login' />}></Route>
        <Route path="/" element={ <ProviderHome/>}></Route>
    </Routes>
  )
}
export default Provider
