const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        console.log(req.user)

        if (req.user.roles.includes("admin")) {
            next()
        }
        else {
            res.status(400).json({ message: "Only users with 'admin' role can access this api" })
        }
    }
    catch (err) {
        return res.status(401).json({
            message: 'Auth failed.'
        })
    }
}