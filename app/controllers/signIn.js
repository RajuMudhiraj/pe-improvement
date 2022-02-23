const { hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// exports.signIn = async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email })
//         if (user) {
//             if (compareSync(req.body.password, user.password)) {

//                 const token = jwt.sign({
//                     email: user.email,
//                     username: user.username,
//                     id: user._id,
//                 },
//                     process.env.JWT_SECRET,
//                     {
//                         expiresIn: "1d"
//                     }
//                 )
//                 res.status(200).json({
//                     success: true,
//                     message: "Logged in successfully!",
//                     token: "Bearer " + token
//                 })
//             }
//             else {
//                 res.status(404).json({ message: "Wrong password." })

//             }
//         }
//         else {
//             res.status(404).json({ message: "User not registered" })
//         }

//     }
//     catch (err) {
//         res.status(500).json({ Error: err + "" })


//     }
// }

exports.signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            if (compareSync(req.body.password, user.password)) {

                const token = jwt.sign({
                    email: user.email,
                    username: user.username,
                    id: user._id,
                },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1d"
                    }
                )
                res.render('login',{layout:'login', token:"Bearer "+token})
            }
            else {
                res.status(404).json({ message: "Wrong password." })

            }
        }
        else {
            res.status(404).json({ message: "User not registered" })
        }

    }
    catch (err) {
        res.status(500).json({ Error: err + "" })


    }
}


exports.signInForm = async (req, res) => {
    res.render('loginForm')
}