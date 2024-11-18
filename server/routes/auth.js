const express = require('express');
const authentication = require('../controllers/authCtrl');
const router = express.Router();

router
.post('/register',authentication.register)
.post('/login',authentication.login)
.get('/logout',authentication.logout)





module.exports = router;