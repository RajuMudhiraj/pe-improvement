const User = require('../models/User')


// Get all users 
exports.getUsersRegisteredToday = async (req, res) => {
    const date = new Date()
    try {
        let users = await User.find({
            createdAt: {
                $gte: new Date(`"${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}"`)
            }
        });
        res.status(200).json({ count: users.length })
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}
