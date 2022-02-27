const express = require('express');
const router = express.Router();
const passport = require('passport')

const {
    getUsersRegisteredToday
} = require("../controllers/getUsersRegisteredToday");


// routes for 'admin' role
router.get('/', passport.authenticate('jwt', { session: false }), getUsersRegisteredToday);


module.exports = router;