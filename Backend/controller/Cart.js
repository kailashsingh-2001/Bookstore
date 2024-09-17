// const user = require('../Models/user')
const User= require('../Models/user')


// adding books to cart
exports.addbooktocart= async (req,res)=>{
try{
    const {bookid , id}=req.headers
    const userdata = await User.findById(id);
    const isbookfavourite= userdata.cart.includes(bookid);

    if(isbookfavourite){
        return res.json({
            status:"success",
            message:"book is already in cart"
        });
    }
    await User.findByIdAndUpdate(id,{
        $push:{cart:bookid},
    })
    return res.json({
        status:"success",
        message:"book added in cart"
    });


}
catch(err){
    return res.status(400).json({message:'internal error'})
}
}


exports.removebook= async (req,res)=>{
    try{
        const {bookid}= req.headers;
        const {id}= req.headers;
        await User.findByIdAndUpdate(id,{
            $pull:{cart:bookid},
        });
        return res.json({
            status:"success",
            message:"book removed from cart"
        });

    }
    catch(err){
        return res.status(400).json({message:'internal error'})
    }
}


exports.getcartuser= async (req,res)=>{
    try{
        const {id}=req.headers;
        const userdata= await User.findById(id).populate("cart");
        const cart= userdata.cart.reverse();
        return res.json({
            status:"success",
            data: cart
        });
    }
    catch(err){
        return res.status(400).json({message:'internal error'})
    } 
}