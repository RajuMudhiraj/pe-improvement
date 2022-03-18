const { hashSync } = require('bcrypt');
const User = require('../models/User')

// Register a user
exports.register = async (req, res) => {
    const { email, password } = req.body
    const checkEsistence = await User.findOne({ email: email })
    if (checkEsistence) {
        res.status(200).json({
            success: false,
            message: "User already exists"
        })
    }
    else {
        const user = new User({
            email: email,
            password: hashSync(password, 10),
        })
        user.save().then(user => {
            res.status(201).json({
                success: true,
                message: "User created successfully.",
                user: {
                    id: user._id,
                    email: user.email
                }
            })

        }).catch(err => {
            res.status(400).json({
                success: false,
                message: err.message
            })
        })
    }
}



