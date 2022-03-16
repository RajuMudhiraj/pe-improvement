const express = require('express');
const router = express.Router();

const {
    token,
} = require('../controllers/token')



/**
* @swagger
* /token:
*   post:
*     summary: Login and get JWT
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: Returns a JWT
*         content:
*           application/json:
*             example:
*               token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoiNjIyYzQzZjZlMzc1NThlMzJhZDk2YjU3IiwiaWF0IjoxNjQ3NDUyNTEyLCJleHAiOjE2NDc1Mzg5MTJ9.E4gYxOZuXS7AfZphRNHDTqfLov5S-GkvLyq7AH2Iq18
*/

router.post('/', token);


module.exports = router;