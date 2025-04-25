// This file contains controller file for the routes of User.
import User from "../models/userSchema.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

// @desc    AUTH USER & GET TOKEN
// @access  PUBLIC
// @route   POST /api/users/login
const authUser = asyncHandler(async(req, res) => {
    // res.send("Login");
    const {email, password} = req.body;
    const user = await User.findOne({email: email});

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }

    else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
});


// @desc    REGISTER A NEW USER
// @access  PUBLIC
// @route   POST /api/users
const registerUser = asyncHandler(async(req, res) => {
    // res.send("Register");
    const {name, email, password} = req.body;

    const userExist = await User.findOne({email: email});

    if(userExist) {
        res.status(400);
        throw new Error("User already exist.");
    }

    const user = await User.create({
        name: name,
        email: email,
        password: password,
    });

    if(user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }

    else{
        res.status(400);
        throw new Error("Invalid user data");
    }

});


// @desc    GET USER'S PROFILE
// @access  PRIVATE
// @route   POST /api/users/profile
const getUserProfile = asyncHandler(async(req, res) => {
    // res.send("Profile of User");
    const user = await User.findById(req.user._id);

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }

    else {
        res.status(404);
        throw new Error("User not found");
    }
});


// @desc    UPDATE USER PROFILE
// @access  PRIVATE
// @route   PUT /api/users/profile
const updateUserProfile = asyncHandler(async(req, res) => {
    // res.send("Update User's Profile");

    const user = await User.findById(req.user._id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
    }

    if(req.body.password) {
        user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(201).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
    })
});

// @desc    LOGOUT USER
// @access  PRIVATE
// @route   GET /api/users/logout
const logoutUser = asyncHandler(async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({message: "Logged out successfully"});
    // res.send("Logout");
});

// @desc    GET ALL USERS
// @acess   ADMIN
// @route   GET /api/users
const getAllUsers = asyncHandler(async(req, res) => {
    res.send("Get All Users");
});

// @desc DELETE USER
// @route DELETE /api/users/:id
// @access PRIVATE/ADMIN
const deleteUser = asyncHandler(async(req, res) => {
    res.send("Delete User");
});

// @desc GET USER BY ID
// @route GET /api/users/:id
// @access PRIVATE/ADMIN
const getUserById = asyncHandler(async(req, res) => {
    res.send("Get User by ID");
});

// @desc UPDATE USER
// @route PUT /api/users/:id
// @access PRIVATE/ADMIN
const updateUser = asyncHandler(async(req, res) => {
    res.send("Update User");
});

export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    logoutUser,
    getAllUsers,
    deleteUser,
    getUserById,
    updateUser
};

