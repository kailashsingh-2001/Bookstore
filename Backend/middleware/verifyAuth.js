const jwt= require('jsonwebtoken');
const secret="BookStore123";
// const User=require('../Models/user')

exports.verifyAuth=async(req,res,next)=>{
try{
    const authheader =req.headers["authorization"];
    const token=authheader && authheader.split(" ")[1];
    
    if(token == null){
        return res.status(401).json({message:"please provided token"})
     }
     jwt.verify(token,secret,(err,user)=>{
        if(err){
            return res.status(400).json({message:"Token expired please login in again"});
        }

        req.user= user;
        next();
     });
   
    }
    catch(err){
        return  console.log(err)
}
}