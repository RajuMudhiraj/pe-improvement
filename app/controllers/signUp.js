const bcrypt = require('bcrypt')
const User = require('../models/User')

// Register a user
exports.signUp =  (req, res) => {
    res.json({
        message:"Signup successful",
        user: req.user
    })
}

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

