import React, { useEffect } from 'react'
import axios from "axios"

function Favourite() {
  const headers= {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
   };
  useEffect(()=>{
    const fetch = async()=>{
      const response= await axios.get("http://localhost:5000/favourite/get-favourite-books",{headers})
      
      console.log(response);
    }
    

  },[]);
  return (
    <div>
      human
    </div>
  )
}

export default Favourite
