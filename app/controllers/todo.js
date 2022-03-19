const Todo = require('../models/Todo')
const _ = require('lodash')


// get all todos of a user
exports.getAllTodos = async (req, res) => {
    //destructuring queries
    const { searchByTitle, searchByCategory, page, limit } = req.query;
    try {
        // find all todos of a user
        let todo = await Todo.find({ userId: req.user.id, title: { $regex: new RegExp(searchByTitle, "i") }, category: { $regex: new RegExp(searchByCategory, "i") } })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // fetching all todos of a user to get actual count of todos
        const count = await Todo.find({ userId: req.user.id, title: { $regex: new RegExp(searchByTitle, "i") }, category: { $regex: new RegExp(searchByCategory, "i") } });
        const totalCount = count.length;

        res.status(200).json({
            todo,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: Number(page)
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

// Get Todo by id param
exports.getTodoById = (req, res) => {
    const { id } = req.params;
    Todo.findById(id)

        .exec()
        .then(response => {
            res.status(200).json(response)

        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                success: false,
                message: err.message
            })
        })
}

// post a Todo
exports.postTodo = (req, res) => {
    const { title, category } = req.body;
    const { username, _id } = req.user;

    Todo.create({ username, title, category, userId: _id })
        .then(doc => {
            res.status(201).json(doc)
        }).catch(err => {
            res.status(400).json({
                success: false,
                message: err.message
            })
        })
}


// update a Todo by Id
exports.updateById = (req, res) => {
    const { id } = req.params;
    console.log(id)
    const { title, isCompleted, category } = req.body;
    Todo.updateOne({ _id: id }, { $set: { title, isCompleted, category } })
        .then(doc => {
            console.log(doc)
            res.status(201).json(doc)
        }).catch(err => {
            res.status(400).json({
                success: false,
                message: err.message
            })
        })
}

// delete a Todo by Id param
exports.deleteById = (req, res) => {
    const { id } = req.params;

    Todo.deleteOne({ _id: id })
        .then(doc => {
            res.status(201).json(doc)
        }).catch(err => {
            res.status(404).json(err)
        })
}
