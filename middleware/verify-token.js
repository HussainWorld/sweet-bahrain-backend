const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // Assign decoded payload to req.user
        req.user = decoded.payload

        // For admin-only routes
        if (req.baseUrl.includes('/products') && req.method !== 'GET') {
            if (req.user.userType !== 'admin') {
                return res.status(403).json({ err: 'Admin access required' })
            }
        }

        next()
    } catch(err) {
        res.status(401).json({ err: 'Invalid token.'})
    }
}

module.exports = verifyToken