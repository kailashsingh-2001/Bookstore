const express=require('express');
const router=express.Router();
const controller=require('../controller/usercontroller');
const { verifyAuth } = require('../middleware/verifyAuth');
// signup
router.post("/signup",controller.signup);
// login
router.post("/login",controller.login);
// get-user-information
router.get('/get-user-information',verifyAuth,controller.getuserinfo)
// update data
router.put('/update-address',verifyAuth,controller.update)

module.exports=router;