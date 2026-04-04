const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");
require("dotenv").config();


// Middleware to verify token
const Auth = (req, res, next) => {
    const token = req.headers.Authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required, please login again...' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.id;
        req.user = UserModel.findById(req.userId);
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = Auth;
