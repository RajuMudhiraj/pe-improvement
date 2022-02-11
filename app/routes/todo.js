const express = require('express');
const router = express.Router();

const {
    getAllTodos,
    postTodo,
    getTodoById,
    updateById,
    deleteById
} = require("../controllers/todo");

router.post('/', postTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.put('/', updateById);
router.delete('/:id', deleteById);

module.exports = router;