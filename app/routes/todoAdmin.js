const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/check-auth')
const checkAdmin = require('../middlewares/check-admin')
const passport = require('passport')

const {

    getAllUsersTodos
} = require("../controllers/todoAdmin");


// routes for 'admin' role
router.get('/', passport.authenticate('jwt', { session: false }), checkAdmin, getAllUsersTodos);


module.exports = router;