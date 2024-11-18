const express = require('express');
const hotel = require('../controllers/hotelCtrl');
const token = require('../utils/tokenVerify');
const router = express.Router();


router
.post('/hotel',token.verifyAdmin,hotel.create)
.put('/hotel/:id',token.verifyAdmin,hotel.update)
.delete('/hotel/:id',token.verifyAdmin,hotel.delete)
.get('/hotel/:id',hotel.get)
.get('/hotels',hotel.getall)



module.exports = router;