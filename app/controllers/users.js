const Todo = require('../models/Todo')
const User = require('../models/User')


// Get all users 
exports.users = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}
