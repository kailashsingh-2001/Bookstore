// const bcrypt= require("bcryptjs");
const Books= require('../Models/book');
// const jwt=require("jsonwebtoken");
const User=require('../Models/user')
// const secret="BookStore123";
// add book
exports.addbook= async (req,res) =>{
    try{
        const {id}=req.headers;
        const user= await User.findById(id);
        if(user.role !== "admin"){
            return res.status(400).json({message:"you don't have access to perform admin work"})

        }

        const book= new Books({
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            desc:req.body.desc,
            language:req.body.language,
        });
        await book.save();
        res.status(200).json({message:"book added successfully"})

    }
    catch(err){
        res.status(500).json({message:"internal error"});
    }

}
// update book
exports.updatebook=async (req,res)=>{
    try{
        const { bookid}=req.headers;
        await Books.findByIdAndUpdate(bookid,{
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            desc:req.body.desc,
            language:req.body.language,
        });

   return res.status(200).json({message:"book updated successfully"})

    }
    catch(err){
     return   res.status(500).json({message:"internal error"});
    }

}
// delete book
exports.deletebook=async (req,res)=>{
    try{
        const { bookid}=req.headers;
        await Books.findByIdAndDelete(bookid,{
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            desc:req.body.desc,
            language:req.body.language,
        });

   return res.status(200).json({message:"book delete successfully"})

    }
    catch(err){
     return   res.status(500).json({message:"internal error"});
    }

    
}
// get all books
exports.allbooks=async (req,res)=>{
    try{
        const books=await Books.find().sort({created:-1});
        return res.json({
            status:"success",
            data:books,
        })

    }
    catch(err){
        return   res.status(500).json({message:"internal error"});
    }

}
// get recently added books limit 4
exports.recentbooks=async (req,res)=>{
    try{
        const books=await Books.find().sort({created:-1}).limit(4);
        return res.json({
            status:"success",
            data:books,
        })

    }
    catch(err){
        return   res.status(500).json({message:"internal error"});
    }
}

// by book id
exports.bybookid=async (req,res)=>{
    try{
       const {id}=req.params;
       const books =await Books.findById(id);
       return res.json({
        status:"success",
        data: books,
       })
    }
    catch(err){
        return   res.status(500).json({message:"internal error"});
    }
}
