const express = require('express');
const User = require('../controllers/userCtrl.js');
const token = require('../utils/tokenVerify.js');
const router = express.Router();

router
// .get('/user/auth',token.verifyToken,(req,res,next)=>{
//     res.send('you r done')
// })
// .get('/checkadmin/:id',token.verifyAdmin,(req,res,next)=>{
//     res.send('you are admin')
// })
.put('/user/:id',token.verifyUser,User.update)
.delete('/user/:id',token.verifyUser,User.delete)
.get('/user/:id',token.verifyUser,User.get)
.get('/users',token.verifyAdmin,User.getall)


module.exports = router;