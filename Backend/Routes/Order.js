const express=require('express');
const router=express.Router();
const controller=require('../controller/Order')
const { verifyAuth } = require('../middleware/verifyAuth');
const { verify } = require('jsonwebtoken');

// adding book order
router.post('/place-order',verifyAuth,controller.placeorder);

// get order history of particular user

router.get('./get-order-history',verifyAuth,controller.getorderhistory)



module.exports=router;
