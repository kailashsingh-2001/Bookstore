import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Allbooks from './pages/Allbooks'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

function App() {
  return (
    <>
     <div>
     <Router>
     <Navbar/>
     <Routes>
     <Route  exact path="/" element={<Home/>}/>
     <Route   path="/allbooks" element={<Allbooks/>}/>
     <Route   path="/cart" element={<Cart/>}/>
     <Route   path="/profile" element={<Profile/>}/>
     <Route   path="/signup" element={<Signup/>}/>
     <Route   path="/login" element={<Login/>}/>
     
     </Routes>
     <Footer/>
     </Router>
    
     
      
      
     
      </div>
    </>
    
  )
}

export default App
