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
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/

router.post('/', token);


module.exports = router;