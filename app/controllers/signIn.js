const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.signIn = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (user) {
            bcrypt.compare(req.body.password, user.password)
                .then(function (response) {
                    if(response){
                        const token = jwt.sign({
                            email: user.email,
                            username: user.username,
                            roles: user.roles,
                            userId:user._id,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "1d"
                        })
                        
                        res.status(200).json({
                            message: "Auth successful",
                            token: token
                        })
                    }
                    else{
                        res.status(404).json({ message: "Wrong credentials."})

                    }
                })
                .catch(err => {
                    res.status(404).json({ message: "Wrong credentials.", Error: err })
                })
        }
        else {
            res.status(404).json({ message: "Wrong credentials."})
        }

    }
    catch (err) {
        res.status(500).json({ Error: err + " Something went wrong while finding user." })

    }
}

