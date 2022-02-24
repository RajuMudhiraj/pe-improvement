const express = require('express');
const router = express.Router();
const passport = require('passport')
const checkAdmin = require('../middlewares/check-admin')

const {
    signUp,
    getAllUsers,
} = require('../controllers/signUp')

router.post('/', signUp);
router.get('/', passport.authenticate('jwt',{session:false}), checkAdmin, getAllUsers);


module.exports = router;