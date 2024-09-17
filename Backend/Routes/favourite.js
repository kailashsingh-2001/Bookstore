const express=require('express');
const router=express.Router();
const verifyAuth=require('../middleware/verifyAuth')
const controller=require('../controller/addtofavourite')


// add book to favroite
router.put('/add-to-favourite',verifyAuth,controller.addfavourite)

module.exports=router