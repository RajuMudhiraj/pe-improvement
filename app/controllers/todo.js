const Todo = require('../models/Todo')
const _ = require('lodash')



// Get all Todos
exports.getAllTodos = async (req, res) => {
    const { searchByTitle, searchByCategory, sortByCreatedAt } = req.query;

    try {
        let todo = await Todo.find({ userId: req.user.id });

        if (searchByTitle) {
            let filteredByTitle = todo.filter(a => _.toLower(a.title.replace(/ /g, "")) == _.toLower(searchByTitle.replace(/ /g, "")));
            res.status(200).json(filteredByTitle)
        }
        else if (searchByCategory) {
            let filteredByCategory = todo.filter(a => a.category.includes(searchByCategory));
            res.status(200).json(filteredByCategory)
        }
        else if (sortByCreatedAt) {
            if (sortByCreatedAt == "asc") {
                todo.sort((a, b) => { return new Date(a.createdAt) - new Date(b.createdAt) })
                res.status(200).json(todo)
            }
            else if (sortByCreatedAt == "desc") {
                todo.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })
                res.status(200).json(todo)
            }
        }
        else {
            res.status(200).json(todo)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}


// Get Todo by id param
exports.getTodoById = (req, res) => {
    const id = req.params.id
    Todo.findById(id)
        // .select('name sourceLink _id')
        .exec()
        .then(response => {
            res.status(200).json(response)

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

// post a Todo
exports.postTodo = (req, res) => {
    const { title, isCompleted, category } = req.body;
    const { username, _id } = req.user;

    Todo.create({ username, title, isCompleted, category, userId:_id})
        .then(doc => {
            res.status(201).json(doc)
        }).catch(err => {
            res.status(404).json(err)
        })
}


// update a Todo by Id
exports.updateById = (req, res) => {
    const { id, username, title, isCompleted, category } = req.body;
    Todo.updateOne({ _id: id }, { $set: { username, title, isCompleted, category } })
        .then(doc => {
            res.status(201).json(doc)
        }).catch(err => {
            res.status(404).json(err)
        })
}

// delete a Todo by Id param
exports.deleteById = (req, res) => {
    Todo.deleteOne({ _id: req.params.id })
        .then(doc => {
            res.status(201).json(doc)
        }).catch(err => {
            res.status(404).json(err)
        })
}