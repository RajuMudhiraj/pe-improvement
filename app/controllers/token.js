const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.token = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user) {
            if (compareSync(password, user.password)) {
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
                res.status(200).json({ token: "Bearer " + token })
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