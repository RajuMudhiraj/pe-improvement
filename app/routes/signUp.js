const express = require('express');
const router = express.Router();
const {signUp} = require('../controllers/signUp')

router.post('/', signUp);


module.exports = router;