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
 *         _id:
 *           type: string
 *           description: The auto generated id of the todo
 *         title:
 *           type: string
 *           description: The todo title
 *         username:
 *           type: string
 *           description: The auto generated username
 *         isCompleted:
 *           type: boolean
 *           description: The auto generated boolean
 *         category:
 *           type: array
 *           description: The categories array
 *         userId:
 *           type: string
 *           description: The auto generated user Id
 *         createdAt:
 *           type: string
 *           description: The auto generated date string
 *         updatedAt:
 *           type: string
 *           description: The auto generated date string
 *         __v:
 *           type: number
 *           description: The auto generated version number
 *       example:
 *         _id: 621600c9d18d6205ec5aa14a
 *         username: new user
 *         title: test
 *         isCompleted: false
 *         category: 
 *           - work
 *           - project
 *         userId: 62152795162439d0dc7742cb
 *         createdAt: 2022-02-23T09:39:21.641Z
 *         updatedAt: 2022-02-23T09:39:21.641Z
 *         __v: 0
 *         
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


// Create a new todo
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

// Get todos
router.get('/', passport.authenticate('jwt', { session: false }), getAllTodos);

// Swagger documentation for get method of /todo/{id} .
/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Returns a todo which matches the id
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: A todo which matches the id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

// Get todo by id
router.get('/:id', passport.authenticate('jwt', { session: false }), getTodoById);

// Swagger documentation for put method of /todo/{id} .
/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: Update the todo by the id
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: A todo which matches the id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

// Update by id
router.put('/:id', passport.authenticate('jwt', { session: false }), updateById);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteById);




module.exports = router;