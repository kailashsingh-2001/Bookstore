const mongoose= require('mongoose');

const userSchema= new mongoose.Schema(
    {
    username:{
        type:String,
        require:true,
        
    },
    email:{
        type:String,
        require:true,
        uniqure:true,
    },
    password:{
        type:String,
        require:true,
       
    },
    address:{
        type:String,
        require:true,
       
    },
   avatar:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
       
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },

    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "books"  // Reference to the books schema
    }],
    
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "books"  // Reference to the books schema
    }],
    
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"  // Reference to the order schema
    }]


},
{
    timestamps:true,versionKey:false
}
);
module.exports=mongoose.model("user",userSchema)