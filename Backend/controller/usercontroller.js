const bcrypt= require("bcryptjs");
const User= require('../Models/user');
const jwt=require("jsonwebtoken");
const secret="BookStore123";
// const Authtoken=require('../middleware/verifyAuth')


// sign up api
exports.signup = async (req,res) =>{
try{
  const {username,email,password,address}=req.body
// using bcrypt
const salt= bcrypt.genSaltSync(10);
const hash=bcrypt.hashSync(password, salt);

  // all feild are require
  if(!(username && email && password)){
  return res.status(400).json({message:"all feild are required"})
   }
  // check username length is more than 7
  if(username.length<7){
    return res.status(400).json({message:"Username lenght should be greater than 6"})
  }
  // check username already exists
  const existingUsername= await User.findOne({username});
  // checking user already exists or not
  if(existingUsername){
  return res.status(400).json({message:"username already exists"})
  }
  // check user email already exists
  const existingUseremail= await User.findOne({email});
  // checking user email already exists or not
  if(existingUseremail){
  return res.status(400).json({message:"user  email already exists"})
  }

// checking password length is less than 5
if(password.length <5){
  return res.status(400).json({message:"your password length should be greater than 5"})
}


const data = {email , username, password:hash,address}
const user= new User(data);
await user.save();
   return  res.status(201).json({message:"sign up successfully"})
 

  }
  catch(err){
    res.status(500).json({message:"internal server error"})
  }
}
   
// login
exports.login = async(req,res)=>{
    try{
// taking data from body
const {username,password}=req.body
// checking username and 
const existinguser= await User.findOne({username});
if(!existinguser){
return res.status(400).json({message:"provide username does not exists"})
}

await bcrypt.compare(password,existinguser.password,(err,data)=>{
  if(data){
    const authClaims=
    [
        {name: existinguser.username},
        {role:existinguser.role},
    ];
    const token=jwt.sign({
      authClaims
    }, secret, { expiresIn: '5h' });
    res.status(200).json({id:existinguser._id,role:existinguser.role,token})

  }else{
    res.status(200).json({message:"invalid cerdentails"})
  }
})
}
catch(err){
        res.status(500).json({message:"internal server error"})
    }

};

// user information getting
exports.getuserinfo=async (req,res)=>{
  try{
    const {id}=req.headers;
    const data= await User.findById(id);
    return res.status(200).json(data);

  }
  catch(err){
    res.status(500).json({message:"internal server error"})}
}


// update 
exports.update = async(req,res)=>{
  try{
    const {id}=req.headers;
    const{address}=req.body;
    await User.findByIdAndUpdate(id,{address});
    return res.status(200).json({message:"address updated successfully"})

  }
  catch(err)
  {
    res.status(500).json({message:"internal server error"})
  }

}








    
   
           
            
