const { hashSync } = require('bcrypt');
const User = require('../models/User')

// Register a user
exports.signUp = async (req, res) => {
    const { email, password } = req.body
    const checkEsistence = await User.findOne({ email: email })
    if (checkEsistence) {
        res.status(200).json({ message: "User already exists" })
    }
    const user = new User({
        email: email,
        password: hashSync(password, 10),
    })
    user.save().then(user => {
        res.status(200).json({
            success: true,
            message: "User created successfully.",
            user: {
                id: user._id,
                email: user.email
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

