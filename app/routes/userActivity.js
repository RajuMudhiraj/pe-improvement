const express = require('express');
const router = express.Router();
const passport = require('passport')

const {
    thisDay,
    thisMonth,
    thisWeek
} = require("../controllers/userActivity");


// routes for 'admin' role
router.get('/thisDay', passport.authenticate('jwt', { session: false }), thisDay);
router.get('/thisWeek', passport.authenticate('jwt', { session: false }), thisWeek);
router.get('/thisMonth', passport.authenticate('jwt', { session: false }), thisMonth);


module.exports = router;