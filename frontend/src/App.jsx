import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes,Route} from "react-router-dom"
import Allbooks from './pages/Allbooks'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Viewbookdetails from './components/viewbookdetails/Viewbookdetails'

function App() {
  return (
    <>
     <div>
   
     <Navbar/>
     <Routes>
     <Route  exact path="/" element={<Home/>}/>
     <Route   path="/allbooks" element={<Allbooks/>}/>
     <Route   path="/cart" element={<Cart/>}/>
     <Route   path="/profile" element={<Profile/>}/>
     <Route   path="/signup" element={<Signup/>}/>
     <Route   path="/login" element={<Login/>}/>
     <Route path='view-book-detais/:id' element={<Viewbookdetails/>}/>
     
     </Routes>
     <Footer/>
     
    
     
      
      
     
      </div>
    </>
    
  )
}

export default App
