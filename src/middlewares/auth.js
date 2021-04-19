class AuthMiddleware {

    constructor(jwt) {
        this.jwt = jwt;
    }

    authenticate = async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            const bearer = 'Bearer ';

            if (!authHeader || !authHeader.startsWith(bearer)) {
                return res.status(401).json('Access denied. No credentials sent!');
            }

            const token = authHeader.replace(bearer, '');

            // Verify Token
            const decoded = await this.jwt.decodeToken(token);

            // if the user has permissions
            req.currentUserId = decoded.id;
            next();

        } catch (e) {
            return res.status(401).json('Authentication failed : \n' + e);
        }
    }
}

export default AuthMiddleware;