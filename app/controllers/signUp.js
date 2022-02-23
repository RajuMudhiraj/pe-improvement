const { hashSync, compareSync } = require('bcrypt');
const User = require('../models/User')

// Register a user
exports.signUp = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: hashSync(req.body.password, 10),
        username: req.body.username
    })
    user.save().then(user => {
        res.send({
            success: true,
            message: "User created successfully.",
            user: {
                id: user._id,
                username: user.username
            }
        })

    }).catch(err => {
        res.send({
            success: false,
            message: "Something went wrong",
            error: err
        })
    })
}

exports.signUpForm = (req, res) => {
    res.render('registerForm')
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

