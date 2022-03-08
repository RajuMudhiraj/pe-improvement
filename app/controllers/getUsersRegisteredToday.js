const User = require('../models/User')


// Get all users 
exports.getUsersRegisteredToday = async (req, res) => {
    const { page, limit } = req.query;

    const date = new Date()
    try {
        let users = await User.find({
            createdAt: {
                $gte: new Date(`"${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}"`)
            }
        })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await User.find({ createdAt: { $gte: new Date(`"${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}"`) } });
        const totalCount = count.length;

        res.status(200).json({
            users,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: Number(page)
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}
