import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers['token'];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Token missing, please log in again",
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        next();
    } catch (error) {
        console.error("Auth Error:", error.message);
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Invalid or expired token",
        });
    }
};

export default authMiddleware;
