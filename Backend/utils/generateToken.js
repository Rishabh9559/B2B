import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId: userId}, process.env.JWT_SECRET, {expiresIn: '30d'}); // jwt.sign() mehtod is used to create a jwt token which takes three parameters i.e. 1.payload: the data i want to send, 2.a secret, 3.time in which it expires(here it is 30 days).
    
    // Set JWT as HTTP-Only cookie (it takes three parameters: 1.name of the cookie, 2. value of the cookie, 3.options)
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'Strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7daus
    });
}

export default generateToken;