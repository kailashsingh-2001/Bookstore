import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [message,setmessage]=useState();
  const [Values,setvalue]=useState({
    username:"",
    email:"",
    password:"",
    address:"",
    
  });
  const navigate= useNavigate();
  const change =(e) =>{
    const {name ,value}= e.target;
    setvalue({...Values , [name]: value});
  }
  const submit = async() =>{
    try{
     if(Values.username === "" || Values.email === "" || Values.password ==="" || Values.address === " "){
      alert("all fields are require");
     }
     else{
      const response=  await axios.post('http://localhost:5000/user/signup', Values);
      setmessage(response.data.message);
      navigate("/login")
      
      
     }
    }
    catch(err){
      console.log(err);
      

    }
  }
  return (
    <>
      <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
        <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
          <p className="text-zinc-200 text-xl">Signup</p>
          <div className="mt-4">
            <div className="">
              <label htmlFor='' className='text-zinc-400'>
                Username
              </label>
              <input type='text' className="w-full mt-2 bg-zinc-900  text-zinc-100 p-2 outline-none" placeholder='username' name='username' required  value={Values.username} onChange={change}/>
            </div>
          </div>
          <div className="mt-4">
            <div className="">
              <label htmlFor='' className='text-zinc-400'>
                Email
              </label>
              <input type='email' className="w-full mt-2 bg-zinc-900  text-zinc-100 p-2 outline-none" placeholder='email' name='email' required value={Values.email} onChange={change} />
            </div>
          </div>

          <div className="mt-4">
            <div className="">
              <label htmlFor='' className='text-zinc-400'>
                Password
              </label>
              <input type='password' className="w-full mt-2 bg-zinc-900  text-zinc-100 p-2 outline-none" placeholder='password' name='password' required value={Values.password} onChange={change}/>
            </div>
          </div>

          <div className="mt-4">
            <div className="">
              <label htmlFor='' className='text-zinc-400'>
               Address
              </label>
              <textarea  className="w-full mt-2 bg-zinc-900  text-zinc-100 p-2 outline-none" rows="5" placeholder='address' name='address' required value={Values.address} onChange={change}/>
            </div>
          </div>

          <div className="mt-4">
            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded  " onClick={submit}>Signup</button>
          </div>
          <div className="flex mt-4 items-cente justify-center text-zinc-200 font-semibold ">or</div>
          <div className="flex mt-4 items-cente justify-center text-zinc-500 font-semibold">Already have account ? &nbsp;
          <Link to="/login" className='hover:text-blue-500'>
          <u>Login</u>
          </Link>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="">{message}</h1>
      </div>
    </>
  )
}

export default Signup
