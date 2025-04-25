// This file contains controller file for the routes of Product.
import Product from "../models/productsSchema.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// @desc  FETCH ALL PRODUCTS
// access PUBLIC
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc  FETCH A SINGLE PRODUCTS
// access PUBLIC
const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Resource not Found');
    }
});

export {getProductById, getProducts};