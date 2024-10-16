const express=require('express');
const router=express.Router();
const controller=require('../controller/addbook')
const { verifyAuth } = require('../middleware/verifyAuth');
// const { verify } = require('jsonwebtoken');

router.post('/add-book',verifyAuth,controller.addbook);
router.put('/update-book',verifyAuth,controller.updatebook);
router.delete('/delete-book',verifyAuth,controller.deletebook);
router.get('/getallbooks',controller.allbooks);
router.get('/get-recent-books',controller.recentbooks);
router.get('/get-book-by-id/:id',controller.bybookid);

module.exports=router;