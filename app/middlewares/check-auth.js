const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded;
        // console.log(req.userData)
        if (req.userData.roles.includes("user")) {
            next()
        }
        else {
            res.status(400).json({ message: "Only users with 'user' role can access this api" })
        }
    }
    catch (err) {
        return res.status(401).json({
            message: 'Auth failed.'
        })
    }

}