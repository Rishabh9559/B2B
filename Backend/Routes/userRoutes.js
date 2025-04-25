// This file contains the Backend Routes for the Users
import express from 'express'
import {
    authUser,
    logoutUser,
    getUserProfile,
    getUserById,
    registerUser,
    getAllUsers,
    deleteUser,
    updateUser,
    updateUserProfile
} from "../controller/userController.js";

import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// router.route('/').get(getAllUsers).post(registerUser);
// router.post('/logout', logoutUser);
// router.post('/login', authUser);
// router.route('/profile').get(getUserProfile).put(updateUserProfile);
// router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);


router.route('/').get(protect, admin, getAllUsers).post(registerUser);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);


export default router;