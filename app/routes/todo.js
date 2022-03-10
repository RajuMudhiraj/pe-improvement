const express = require('express');
const router = express.Router();
const passport = require('passport')

const {
    getAllTodos,
    postTodo,
    getTodoById,
    updateById,
    deleteById,
} = require("../controllers/todo");

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated id of the todo
 *         title:
 *           type: string
 *           description: The todo title
 *       example:
 *         id: d5ae5
 *         title: test 
 */

/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Returns the list of all the todos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

// routes for 'user' role
router.post('/', passport.authenticate('jwt', { session: false }), postTodo);
router.get('/', passport.authenticate('jwt', { session: false }), getAllTodos);
router.get('/:id', passport.authenticate('jwt', { session: false }), getTodoById);
router.put('/', passport.authenticate('jwt', { session: false }), updateById);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteById);

// routes for 'admin' role
// router.get('/admin', checkAdmin, getAllUsersTodos);


module.exports = router;