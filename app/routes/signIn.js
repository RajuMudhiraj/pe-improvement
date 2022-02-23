const express = require('express');
const router = express.Router();
const {
    signIn, signInForm,
} = require('../controllers/signIn')

router.post('/', signIn);
router.get('/', signInForm);


module.exports = router;