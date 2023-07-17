//contains actions to be executed when requests are received
import jwt from 'jsonwebtoken';

/*
verification
*/
const isAuth = (req, res, next) => { //authentication method
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'authentication failed' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken; 
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    };
    if (!decodedToken) {
        res.status(401).json({ message: 'unauthorized' });
    } else {
        res.status(200).json({ message: 'Welcome!' });
    };
};

export { isAuth };
