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
 *         title:
 *           type: string
 *           description: The todo title
 *           example: The work to do tomarrow
 *         category:
 *           type: array
 *           description: The categories array
 *           example: [work, office]
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
*       201:
*         description: The list of the todos
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Todo'
*             example:
*               _id: 621600c9d18d6205ec5aa14a
*               username: new user
*               title: test
*               isCompleted: false
*               category: 
*                 - work
*                 - project
*               userId: 62152795162439d0dc7742cb
*               createdAt: 2022-02-23T09:39:21.641Z
*               updatedAt: 2022-02-23T09:39:21.641Z
*               __v: 0
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
 *     parameters:
 *       - in: query
 *         name: searchByTitle
 *         schema:
 *           type: string
 *         description: Search the todo by title
 *       - in: query
 *         name: searchByCategory
 *         schema:
 *           type: string
 *         description: Search the todo by Category
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *         description: Enter a page number (to get paginated results)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *         description: Enter a limit (to get paginated results)
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

// Swagger documentation for delete method of /todo/{id} .
/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Delete the todo by the id
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
 *         description: Acknowledgement of todo deletion
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

// Delete by id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteById);




module.exports = router;