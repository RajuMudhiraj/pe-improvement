const Todo = require('../models/Todo')

// Get all Todos
exports.getAllTodos = (req, res) => {
    Todo.find()
        // .select('name sourceLink _id')
        .exec()
        .then(docs => {
            console.log(docs)
            const response = {
                count: docs.length,
                todos: docs.map(doc => {
                    return {
                        username: doc.username,
                        title: doc.title,
                        isCompleted: doc.isCompleted,
                        _id: doc._id

                    }
                })
            };
            res.status(200).json(response)

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
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
    const { username, title, isCompleted, category } = req.body;
    Todo.create({ username, title, isCompleted, category })
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