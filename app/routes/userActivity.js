const express = require('express');
const router = express.Router();
const passport = require('passport')

const {
    thisDay,
    thisMonth,
    thisWeek
} = require("../controllers/userActivity");


// routes for 'admin' role

// Swagger documentation for get method of /userActivity/thisDay
/**
 * @swagger
 * /userActivity/thisDay:
 *   get:
 *     summary: Returns a list of today's active users.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: today's active users
 *         content:
 *           application/json:
 *             example:
 *               -
 *                 _id: 621600c9d18d6205ec5aa14a
 *                 email: "email@gmail.com"
 *                 createdAt: 2022-02-23T09:39:21.641Z
 *                 updatedAt: 2022-02-23T09:39:21.641Z
 *                 __v: 0
 *       400:
 *         description: Error message.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Error message
 */
router.get('/thisDay', passport.authenticate('jwt', { session: false }), thisDay);

// Swagger documentation for get method of /userActivity/thisWeek
/**
 * @swagger
 * /userActivity/thisWeek:
 *   get:
 *     summary: Returns a list of this week's active users.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: this week's active users
 *         content:
 *           application/json:
 *             example:
 *               - test@gmail.com
 *               - email@gmail.com
 *       400:
 *         description: Error message.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Error message
 */
router.get('/thisWeek', passport.authenticate('jwt', { session: false }), thisWeek);

// Swagger documentation for get method of /userActivity/thisWeek
/**
 * @swagger
 * /userActivity/thisMonth:
 *   get:
 *     summary: Returns a list of this month's active users.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: this month's active users
 *         content:
 *           application/json:
 *             example:
 *               - test@gmail.com
 *               - email@gmail.com
 *       400:
 *         description: Error message.
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Error message
 */
router.get('/thisMonth', passport.authenticate('jwt', { session: false }), thisMonth);


module.exports = router;