import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes,Route, Router} from "react-router-dom"
import Allbooks from './pages/Allbooks'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Viewbookdetails from './components/viewbookdetails/Viewbookdetails'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './Store/Auth'
import Favourite from './components/Profile/Favourite'
import Userorder from './components/Profile/Userorder'
import Setting from './components/Profile/Setting'

function App() {
  const dispatch = useDispatch();
  const role= useSelector((state)=>state.auth.role);
  useEffect(()=>{
    if(
      localStorage.getItem("id")&&
      localStorage.getItem("token")&&
      localStorage.getItem("role")

    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")))
    }
  },[])
  return (
    <>
     <div>
   
     <Navbar/>
     <Routes>
     <Route  exact path="/" element={<Home/>}/>
     <Route   path="/allbooks" element={<Allbooks/>}/>
     <Route   path="/cart" element={<Cart/>}/>
     <Route   path="/profile" element={<Profile/>}>
     <Route index element={<Favourite/>} />
     <Route path="/profile/orderhistory" element={<Userorder/>} />
     <Route path="/profile/settings" element={<Setting/>} />
     </Route>
      
     
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
