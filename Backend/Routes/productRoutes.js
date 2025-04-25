// This file contains the Backend Routes for the Products
import express from "express";
// import { getProducts, getProductById } from "../controller/productController.js";
import { getProductById, getProducts } from "../controller/productController.js";

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
