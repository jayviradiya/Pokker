const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Access denied. No token provided.' });

    const token = authHeader.split(' ')[1];

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = verifyToken;
