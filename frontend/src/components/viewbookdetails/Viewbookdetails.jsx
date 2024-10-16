// import React from 'react'
import { useParams } from 'react-router-dom'
import React, { useState ,useEffect} from 'react'
import axios from  "axios";

import Loder from './../LODER/Loder';

function Viewbookdetails  (){
  const {id} =useParams();
  const [ Data , setData] = useState();
  useEffect(() => {
    const fetch = async ()=>{
       const response =await axios.get(`http://localhost:5000/book/get-book-by-id/${id}`)  ;         
      
      
       setData(response.data.data);
      };
    fetch()
  
  }, []);
 return (
   <>
    {Data && <div className="px-12  py-8 bg-zinc-900 flex-col   md:flex-row   flex gap-8">
    <div className="bg-zinc-800 rounded p-4 h-[60vh] lg:h[88vh] w-full lg:w-3/6  flex items-center justify-center">
    <img className="h-[50vh] lg:h-[70vh] rounded" src={Data.url} />
    </div>

    <div className="p-4 w-full lg:w-3/6">
    <h1 className="text-4xl text-zinc-300 font-semibold">
      {Data.title}
    </h1>
    <p className='text-zinc-400 mt-1 '>By{Data.author}</p>
    <p className='text-zinc-500 mt-4 text-xl'>{Data.desc}</p>
    <h4 className="flex mt-4 items-center justify-start text-2xl text-zinc-100 font-semibold">
     {Data.language}
    </h4>
    <p className="mt-4 text-zinc-100 text-3xl font-semibold">
      Price:${Data.price}{" "}
    </p>

    </div>
        
    </div>}

    {!Data && <div className="h-Screen bg-zinc-900 flex items-center justify-center"><Loder/></div>}
   </>
  )
}

export default Viewbookdetails
