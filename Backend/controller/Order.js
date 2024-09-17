// const book=require('../Models/book')
const Order=require('../Models/order');
const User= require('../Models/user')

exports.placeorder= async (req,res)=>{
 try{
    const {id}=req.headers
    const {order}=req.body

    for(const orderData of order){
        const neworder= new Order({user:id , book:orderData._id});
        const orderDataformDb= await neworder.save();

        // saving order in user model
        await User.findByIdAndUpdate(id,{
            $push:{orders:orderDataformDb._id}
        })
    }
    return res.json({
        status:"success",
        message:"order placed successfully"
    });

 }
 catch(err){
    return res.status(400).json({message:'internal error'})
} 
}

exports.getorderhistory= async (req,res)=>{
    try{
        const {id}=req.headers;
        const userData= await User.findById(id).populate({
            path:"orders",
            populate:{path:"books"},

        });
        const ordersData= userData.orders.reverse();
        return res.json({
            status:"success",
           data: ordersData
        });

        

    }
    catch(err){
        return res.status(400).json({message:'internal error'})
    } 
}
