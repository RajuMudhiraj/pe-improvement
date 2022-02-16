const Todo = require('../models/Todo')
const _ = require('lodash')

// Get all users Todos
exports.getAllUsersTodos = async (req, res) => {
    const { searchByTitle, searchByCategory, sortByCreatedAt } = req.query;

    try {
        let todo = await Todo.find();

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
        res.status(400).json(`Error:"Test", ${err}`)
    }

}
