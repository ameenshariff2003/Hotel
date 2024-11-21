const express = require('express');
const hotel = require('../controllers/hotelCtrl');
const token = require('../utils/tokenVerify');
const router = express.Router();


router
.post('/hotel',token.verifyAdmin,hotel.create)
.put('/hotel/:id',token.verifyAdmin,hotel.update)
.delete('/hotel/:id',token.verifyAdmin,hotel.delete)
.get('/hotel/find/:id',hotel.get)

.get('/hotels',hotel.getall)
.get('/hotels/countbycity',hotel.countByCity)
.get('/hotels/countbytype',hotel.countByType)




module.exports = router;