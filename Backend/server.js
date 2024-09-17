const express= require("express");
const dotenv=require("dotenv").config()
const connectDB = require("./config/db");
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectDB();





const UserRoutes=require('./Routes/user')
app.use("/user",UserRoutes);
const bookRoutes=require('./Routes/Books')
app.use("/book",bookRoutes);
const favourites=require('./Routes/favourite')
app.use("/favourite",favourites)
const carts=require('./Routes/Cart')
app.use("/cart",carts)
const orders=require('./Routes/Order')
app.use("/order",orders)

//  creating port
app.listen(process.env.PORT,() =>{
    console.log(`server running ${process.env.PORT}`);
    
})