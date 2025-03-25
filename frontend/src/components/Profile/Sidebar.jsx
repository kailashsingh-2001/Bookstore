import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({data}) {
  return (
    <div className='bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]'>
     <div className="flex items-center flex-col justify-center">
     {" "}
     <img className="h-[12vh]" src={data.avatar} />
      <p className="mt-3 text-xl text-zinc-100 font-semibold">
      {data.username}
      </p>

      <p className="mt-1 text-normal text-zinc-300 ">
      {data.email}
      </p>
     </div>
      <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>

      <div className="w-full flex-col items-center justify-center hidden lg:flex">
        <Link to="/profile" className='text-zinc-100 font-semibold w-full py-2 text-center  hover:bg-zinc-900 rounded transition-all'>
            Favourites
        </Link>
        <Link to="/profile/orderHistory" className='text-zinc-100 font-semibold w-full py-2 text-center  hover:bg-zinc-900 rounded transition-all'>
           order History
        </Link>
        <Link to="/profile/settings" className='text-zinc-100 font-semibold w-full py-2 text-center  hover:bg-zinc-900 rounded transition-all'>
            settings
        </Link>
      </div>
      <button className="bg-zinc-900 w-3/6 p-2 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center rounded hover:bg-white hover:text-black">Log out</button>

      
    </div>
  )
}

export default Sidebar
