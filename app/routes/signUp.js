const express = require('express');
const router = express.Router();
const {
    signUp,
    getAllUsers
} = require('../controllers/signUp')

router.post('/', signUp);
router.get('/', getAllUsers);


module.exports = router;