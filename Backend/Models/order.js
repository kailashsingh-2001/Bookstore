const mongoose = require("mongoose");

const order= new mongoose.Schema({
    user:{
        type:mongoose.Types.objectId,
        ref:"user"
    },
    book:{
        type:mongoose.Types.objectId,
        ref:" books"
    },
    status:{
        type:String,
       default:"Order Placed",
       enum:["order placed","out for delivery,Delivered,canceled"],
    },


},
{
    timestamps:true
}
);
module.exports=mongoose.model("order",order)