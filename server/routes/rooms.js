const express = require('express');
const token = require('../utils/tokenVerify');
const room = require('../controllers/roomCtrl.js');
const router = express.Router();


router
.post('/room/:hotelid',token.verifyAdmin,room.create)
.put('/room/:id',token.verifyAdmin,room.update)
.delete('/room/:id/:hotelid',token.verifyAdmin,room.delete)
.get('/room/:id',room.get)
.get('/rooms',room.getall);



module.exports = router;