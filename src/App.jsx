import {  } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserRoute from "./Routes/User";
import AdminRoute from "./Routes/Admin";
import './App.css'

function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route path='/admin/*' element={<AdminRoute/>}/>
        <Route path='/*' element={<UserRoute />}/>
      
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
