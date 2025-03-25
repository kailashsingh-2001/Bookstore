// import React from 'react'
import { useParams } from 'react-router-dom'
import React, { useState ,useEffect} from 'react'
import axios from  "axios";

import Loder from './../LODER/Loder';
import { MdOutlineDelete} from 'react-icons/md'
import {FaEdit,FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import Favourite from './../Profile/Favourite';

function Viewbookdetails  (){
 const isloggedin = useSelector((state) => state.auth.isLoggedIn );
 const role = useSelector((state) => state.auth.role );
 
 
 
  const {id} =useParams();
  const [ Data , setData] = useState();
  useEffect(() => {
    const fetch = async ()=>{
       const response =await axios.get(`http://localhost:5000/book/get-book-by-id/${id}`)  ;         
      
      
       setData(response.data.data);
      };
    fetch()
  
  }, []);
  const headers ={
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid:id,
  }
  const handlefavourite = async () => {
    const responses= await axios.put("http://localhost:5000/favourite/add-to-favourite",
      {},
      {headers} );
      alert(responses.data.message);
  }


  const handleordercart= async () => {
    const responses= await axios.put("http://localhost:5000/cart/add-book-cart",
      {},
      {headers} );
      alert(responses.data.message);
  }

  
  
  
 return (
   <>
    {Data && 
    <div className=" px-4 md:px-12  py-8 bg-zinc-900  flex flex-col   lg:flex-row  flex gap-8 items-start">
    <div className=" w-full lg:w-3/6  ">
    {"  "}
    <div className=" flex flex-col lg:flex-row justify-between bg-zinc-800 p-12 rounded">
    <img className="h-[50vh] md:h-[60vh]  lg:h-[70vh] rounded" src={Data.url} alt='/' />
    {isloggedin === true && role === 'user' &&(
      <div className=" flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start  mt-8 lg:mt-0">
      <button className="bg-white  rounded lg:rounded-full text-3xl p-2 m-0 text-red-500 flex items-center justify-center" onClick={handlefavourite}><FaHeart/>{" "}
      <span className="ms-4 block lg:hidden ">Add to Favourite</span>
      </button>
      <button className="  bg-white rounded lg:rounded-full text-3xl p-2 m-2 text-blue-500 flex items-center justify-center" onClick={handleordercart}><FaShoppingCart/>{" "}
      <span className="ms-4 block lg:hidden ">Add to cart</span></button>
    </div>
    )}
     {isloggedin === true && role === 'admin' &&(
      <div className=" flex   flex-col md:flex-row lg:flex-col mt-4 lg:mt-0 items-center justify-between lg:justify-start ">
      <button className="bg-white  rounded lg:rounded-full text-3xl p-2 m-0 text-red-500 flex items-center justify-center"><FaEdit/>{" "}
      <span className="ms-4 block lg:hidden ">Edit</span>
      </button>
      <button className="  bg-white rounded lg:rounded-full text-3xl p-2 m-2 text-blue-500 flex items-center justify-center"><MdOutlineDelete/>{""}
      <span className="ms-4 block lg:hidden ">Delete</span></button>
    </div>
     )}
    </div>
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
