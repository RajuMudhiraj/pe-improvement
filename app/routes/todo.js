const express = require('express');
const router = express.Router();
const passport = require('passport')
const checkAuth = require('../middlewares/check-auth')
const checkAdmin = require('../middlewares/check-admin')

const {
    getAllTodos,
    postTodo,
    getTodoById,
    updateById,
    deleteById
} = require("../controllers/todo");

// routes for 'user' role
router.post('/', passport.authenticate('jwt', { session: false }), postTodo);
router.get('/',  passport.authenticate('jwt', { session: false }), getAllTodos);
router.get('/:id', passport.authenticate('jwt', { session: false }), getTodoById);
router.put('/', passport.authenticate('jwt', { session: false }), updateById);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteById);

// routes for 'admin' role
// router.get('/admin', checkAdmin, getAllUsersTodos);


module.exports = router;