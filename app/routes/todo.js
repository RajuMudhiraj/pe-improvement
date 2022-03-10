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

// Swagger documentation for Todo Schema.
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
 *         title: test 
 */

// Todos tag for grouping all todo managing apis
/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: The Todos managing apis
 */

// Swagger documentation for /todo post method.
/**
* @swagger
* /todo:
*   post:
*     summary: Create a todo
*     tags: [Todo]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Todo'
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

// Swagger documentation for /todo get method.
/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Returns the list of all the todos
 *     tags: [Todo]
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

router.get('/', passport.authenticate('jwt', { session: false }), getAllTodos);
router.get('/:id', passport.authenticate('jwt', { session: false }), getTodoById);
router.put('/', passport.authenticate('jwt', { session: false }), updateById);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteById);




module.exports = router;