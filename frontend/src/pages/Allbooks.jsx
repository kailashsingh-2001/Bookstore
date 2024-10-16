// import React from 'react'
import React, { useState ,useEffect} from 'react'
import axios from  "axios";
import Loder from '../components/LODER/Loder'
import Bookcard from '../components/Bookcard/Bookcard'


function Allbooks() {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async ()=>{
       const response =await axios.get("http://localhost:5000/book/getallbooks")
       setData(response.data.data);
       

    }
    fetch()
  
  }, [])
  return (
    <>
      <div className="bg-zinc-900  h-auto  px-12 py-8">
      <h4 className="text-3xl text-yellow-100">All books</h4>
        {!Data && (
        <div className="flex items-center justify-center my-8">

        <Loder/>{" "}
        </div>
        
        )}
        <div className="my-8 grid  grid-cols-1 sm:grid-cols-3    md:grid-cols-4 gap-4">
        {Data && Data.map((items,i)=>
         <div className="" key={i}><Bookcard data={items}/>{" "}
         </div>
         )}
 
        </div>
      </div>
    </>
    
  )
}

export default Allbooks
