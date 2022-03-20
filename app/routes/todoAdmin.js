const express = require('express');
const router = express.Router();
const checkAdmin = require('../middlewares/check-admin')
const passport = require('passport')

const {

    getAllUsersTodos
} = require("../controllers/todoAdmin");


/**
 * @swagger
 * /todoAdmin:
 *   get:
 *     summary: Returns the list of all users todos
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
 *             example:
 *               todo:
 *                 -
 *                   _id: 621600c9d18d6205ec5aa14a
 *                   title: test
 *                   isCompleted: false
 *                   category: 
 *                     - work
 *                     - project
 *                   userId: 62152795162439d0dc7742cb
 *                   createdAt: 2022-02-23T09:39:21.641Z
 *                   updatedAt: 2022-02-23T09:39:21.641Z
 *                   __v: 0
 *                 -
 *                   _id: 621600c9d18d6205ec5aa14a
 *                   title: test
 *                   isCompleted: false
 *                   category: 
 *                     - work
 *                     - project
 *                   userId: 62152795162439d0dc7742cb
 *                   createdAt: 2022-02-23T09:39:21.641Z
 *                   updatedAt: 2022-02-23T09:39:21.641Z
 *                   __v: 0
 *               totalPages: null
 *               currentPage: null
 *       400:
 *         description: Error message.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Error message
 */


// routes for 'admin' role
router.get('/', passport.authenticate('jwt', { session: false }), checkAdmin, getAllUsersTodos);


module.exports = router;