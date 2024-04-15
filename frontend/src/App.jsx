import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./links/Login"
import Register from "./links/Register"
import Model from "./links/Model"
import Home from "./links/Home"
import About from "./links/About"
import NotFound  from "./links/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"
import Privacy from "./links/Privacy"

// Clear refresh and access tokens upon logout
function Logout() {
  localStorage.clear()
  return ( <Login /> )
}

// Clear old access tokens upon registration
function RegisterLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return ( <div>
    <div>
      <Navbar />
    </div>
     <div>
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Model />
                </ProtectedRoute>
              }
            />
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<RegisterLogout />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/privacy-policy" element={<Privacy />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
    </div>
    <div className='content'>
      <div className='legal'>©Copyright {new Date().getFullYear} CVD Diagnosis | <a href='/privacy-policy'>Privacy Policy</a> | <b><a href='https://github.com/Shshiv0'>GitHub</a></b></div>
    </div>
    </div>
  )
}

export default App
