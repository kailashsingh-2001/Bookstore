const express= require("express");
const app=express();
const dotenv=require("dotenv").config()


app.get('/',(req,res)=>{
 res.send("hello world")
})




//  creating port
app.listen(process.env.PORT,()=>{
    console.log(`server running  ${process.env.PORT}`);
    
})