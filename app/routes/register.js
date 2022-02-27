const express = require('express');
const router = express.Router();
const passport = require('passport')
const checkAdmin = require('../middlewares/check-admin')

const {
    register,
} = require('../controllers/register')

router.post('/', register);


module.exports = router;