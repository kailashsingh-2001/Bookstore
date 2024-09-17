const express=require('express');
const router=express.Router();
const controller=require('../controller/Cart')
const { verifyAuth } = require('../middleware/verifyAuth');

// add book to cart
router.put('/add-book-cart',verifyAuth,controller.addbooktocart);

// remove book fromm cart
router.put('/remove-from-cart',verifyAuth,controller.removebook);

// get cart of a particular user
router.get('/get-cart-user',verifyAuth,controller.getcartuser)

module.exports= router