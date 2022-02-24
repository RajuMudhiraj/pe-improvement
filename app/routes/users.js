const express = require('express');
const router = express.Router();
const checkAdmin = require('../middlewares/check-admin')
const passport = require('passport')

const {
    users
} = require("../controllers/users");


// routes for 'admin' role
router.get('/', passport.authenticate('jwt', { session: false }), checkAdmin, users);


module.exports = router;