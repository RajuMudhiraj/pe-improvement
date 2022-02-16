const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded
        if (req.userData.roles.includes("admin")) {
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