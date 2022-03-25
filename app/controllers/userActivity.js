const UserActivity = require('../models/UserActivity')

const date = new Date();
const today = new Date(`${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}`)
const last7thDay = new Date(new Date() - (1000 * 60 * 60 * 24 * 6))
const last30thDay = new Date(new Date() - (1000 * 60 * 60 * 24 * 29))


// Get activity of the day
exports.thisDay = async (req, res) => {
    try {
        let activity = await UserActivity.find({ createdAt: { $gte: today } });

        res.status(200).json(activity)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

// Get activity of last seven days
exports.thisWeek = async (req, res) => {
    try {
        let activity = await UserActivity.find({ createdAt: { $gte: last7thDay } }).distinct('email');

        res.status(200).json(activity)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

// Get activity of last 30 days
exports.thisMonth = async (req, res) => {
    try {
        let activity = await UserActivity.find({ createdAt: { $gte: last30thDay } });

        res.status(200).json(activity)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}