import jwt from 'jsonwebtoken';

import asyncHandler from './asyncHandler.js';
import User from '../models/userSchema.js';

// Protect Routes
const protect = asyncHandler(async(req, res, next) => {
    // console.log("Cookie recieved: ",req.cookies);
    let token;
    token = req.cookies.jwt;
    
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log("Cookie Decoded: ",decoded);
            req.user = await User.findById(decoded.userId).select('-password');
            // console.log("Authenticated User: ", req.user);
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Unauthorized, token failed");
        }
        
    }
    else{
        res.status(401);
        throw new Error("Unauthorized, not token");
    }
});


// Admin Middleware
const admin = (req, res, next) => {
    // console.log(req.user);
    if(req.user && req.user.isAdmin){
        next();
    }
    else{
        res.status(401);
        throw new Error("Not Authorized as Admin.");
    }
};

export {protect, admin};