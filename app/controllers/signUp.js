const bcrypt = require('bcrypt')
const User = require('../models/User')
const _ = require('lodash')
// Get all Todos
exports.signUp =  (req, res) => {
    const { username, email, password, phone, roles } = req.body;
    bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
            res.status(500).json({ Error: err + " Something went wrong while hashing password" })
        }
        if (hash) {
            try {
                let user = await User.create({ username, email, password:hash, phone });

                res.status(200).json(user)

            }
            catch (err) {
                console.log(err)
                res.status(400).json(err)
            }
        }
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

