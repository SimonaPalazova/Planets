const jwt = require('../lib/jwt')

const { SECRET, TOKEN_KEY } = require('../config/untilConfig')

exports.auth = async (req, res, next) => {
    const token = req.cookies[TOKEN_KEY];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
        try {
            const decodedToken = await jwt.verify(token, SECRET)
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            
        } catch (err) {
            res.clearCookie(TOKEN_KEY);
            return res.status(401).send("Invalid Token");
        }
    return next();
    
}
