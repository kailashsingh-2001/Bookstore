import React from 'react'
import {FaGripLines} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const links=[
  {
    title:"Home",
    link:"/",
  },
  // {
  //   title:"About Us",
  //   link:"/aboutus",
  // },
  {
    title:"All Books",
    link:"/allbooks",
  },
  {
    title:"Cart",
    link:"/cart",
  },
  {
    title:"Profile",
    link:"/profile",
  },
  ]
  const [MobileNav, setMobileNav]= useState("hidden");
  return (
    <>
      <nav className='z-50 relative flex justify-between bg-zinc-800 text-white px-8 py-2 items-center'>
       <Link to={'/'} className="flex items-center">
        <img className="h-10 me-4" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt='logo'/>
      <h1 className='text-2xl font-semibold'>Book Heaven</h1>
       </Link>
       <div className='nav-links-bookheaven block md:flex items-center gap-4  '>
        <div className="hidden md:flex gap-4 ">
        {links.map((item,i)=>(
        <Link 
        to={item.link} 
        className='hover:text-blue-500 transition-all duration-300' 
        key={i}
        >
        {item.title}{" "}
        </Link>
        ))}
        </div>
        <div className="hidden md:flex  gap-4  ">
          <Link to={'/login'} className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Login</Link>
          <Link to={'/signup'} className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">Sign up</Link>
        </div>
        <button className="
       block md:hidden text-white text-2xl hover:text-zinc-400" 
        onClick={() =>
        (MobileNav ==="hidden" ? 
        setMobileNav("block") : 
        setMobileNav("hidden"))} >
         <FaGripLines/>
        </button>
       </div>
      </nav>

      <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center  justify-center `}>
      {links.map((item,i)=>(
        <Link to={item.link} 
        className={`${MobileNav} text-white mb-4 text-4xl font-semibold  hover:text-blue-500 transition-all duration-300`} key={i}
        onClick={() =>
        (MobileNav ==="hidden" ? 
        setMobileNav("block") : 
        setMobileNav("hidden"))} >
        {item.title}
        </Link>
        ))}
        <Link to={'/login'} className={`${MobileNav}px-8 mb-8 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}>Login</Link>
        <Link to={'/signup'} className={`${MobileNav}px-8 mb-8 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}>Sign up</Link>
      </div>

    </>
  )
}

export default Navbar
