const express = require('express');
const router = express.Router();
const passport = require('passport')
const checkAdmin = require('../middlewares/check-admin')

const {
    register,
} = require('../controllers/register')

// Swagger documentation for User Schema.
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email Id
 *         password:
 *           type: string
 *           description: The password
 *         
 *       example:
 *         email: test@gmail.com
 *         password: password
 *                
 */

// User tag for grouping all User managing apis
/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing apis
 */


/**
* @swagger
* /register:
*   post:
*     summary: Create new user
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: The response information of existing User.
*         content:
*           application/json:
*             example:
*               success: false
*               message: User already exists  
*       201:
*         description: The response user created.
*         content:
*           application/json:
*             example:
*               success: true
*               message: User created successfully.
*               user:
*                 id: 6234ac75ec0fbb40272d564b
*                 email: test1@gmail.com   
*       400:
*         description: Error message.
*         content:
*           application/json:
*             example:
*               success: false
*               message: "User validation failed: email: test2gmail.com is not a valid email"
*/
router.post('/', register);


module.exports = router;