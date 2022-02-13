const User = require('../models/User')
const _ = require('lodash')
// Get all Todos
exports.signUp = async (req, res) => {
    const { username, email, password, phone, roles } = req.body;

    try {
        let user = await User.create({ username, email, password, phone });

        res.status(200).json(user)

    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

