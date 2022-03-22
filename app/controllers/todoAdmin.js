const Todo = require('../models/Todo')
const _ = require('lodash')

// Get all users Todos
exports.getAllUsersTodos = async (req, res) => {
    const { searchByTitle, searchByCategory, sortByCreatedAt, limit, page } = req.query;
    try {
        // find all todos of a user
        let todo = await Todo.find({ title: { $regex: new RegExp(searchByTitle, "i") }, category: { $regex: new RegExp(searchByCategory, "i") } })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // fetching all todos of a user to get actual count of todos
        const count = await Todo.find({ title: { $regex: new RegExp(searchByTitle, "i") }, category: { $regex: new RegExp(searchByCategory, "i") } });
        const totalCount = count.length;

        res.status(200).json({
            todo,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: Number(page)
        })

    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err + ""
        })
    }

}
