import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config.js';

// Verifies the "Authorization: Bearer <token>" header and puts the
// logged-in user on req.user. Rejects the request with 401 otherwise.
export const requireAuth = (req, res, next) => {
    const [scheme, token] = (req.get('Authorization') || '').split(' ');
    if (scheme !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'authentication required' });
    }
    try {
        const { userId, email } = jwt.verify(token, JWT_SECRET);
        req.user = { userId, email };
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'invalid or expired token' });
    }
};

// For routes that act on the caller's own data: whatever userId the
// client sent is replaced with the one from the token.
export const asSelf = (req, res, next) => {
    req.query.userId = req.user.userId;
    if (req.body) req.body.userId = req.user.userId;
    next();
};

// For routes that may read another user's wardrobe (friend view):
// default to the caller when no userId is given.
export const defaultToSelf = (req, res, next) => {
    if (!req.query.userId) req.query.userId = req.user.userId;
    next();
};
