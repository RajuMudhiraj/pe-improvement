const express = require('express');
const router = express.Router();

// Frontend apis
// home
router.get('/', (req, res) => {
    res.render('home')
});

// get register page
router.get('/registerForm', (req, res) => {
    res.render('registerForm')
});

//get login page
router.get('/loginForm', (req, res) => {
    res.render('loginForm')
});

//get login page
router.get('/userHome', (req, res) => {
    res.render('userHome')
});

//post todo page
router.get('/postTodo', (req, res) => {
    res.render('postTodo')
});

// Backend RESTful apis
// Register
router.use('/register', require('./register'));

//Login
router.use('/token', require('./token'));

//get individual todos
router.use('/todo', require('./todo'));

// get all users todos
router.use('/todoAdmin', require('./todoAdmin'));

// get all users todos
router.use('/users', require('./users'));

// get all users registered today
router.use('/getUsersRegisteredToday', require('./getUsersRegisteredToday'));

// get all users registered today
router.use('/userActivity', require('./userActivity'));


module.exports = router;