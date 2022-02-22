const express = require('express');
const router = express.Router();
const passport = require('passport')

const {
    signUp,
    getAllUsers
} = require('../controllers/signUp')

router.post('/', signUp);
router.get('/', getAllUsers);


module.exports = router;