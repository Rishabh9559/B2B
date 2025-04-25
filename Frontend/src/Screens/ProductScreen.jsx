import React from 'react'
import { useState, useEffect  } from 'react';
import axios from 'axios';
import H_Products from '../components/H_Products.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';
import { useParams } from 'react-router-dom';
import { updateCart } from '../utils/cartUtils.js';

const ProductScreen = () => {
    // const [products, setProducts] = useState([]);

    
    const {data: products, isLoading, error} = useGetProductsQuery();
   

    let category = useParams().category;
    if(category == "HomeAppliances") category = "Home Appliances";



    if(isLoading) {
        return( 
            <div className='sm:px-16 px-8 sm:py-24 py-12'>
                <h1 className='text-2xl font-bold'>Loading...</h1>
            </div>
        );
    }
    if(error) {
        return( 
            <div className='sm:px-16 px-8 sm:py-24 py-12'>
                <h1 className='text-2xl font-bold'>Error: {error}</h1>
            </div>
        );
    }
    
    const updatedProducts = category ? products.filter((product) => product.category === category) : products;
    console.log(updatedProducts);

    // console.log(category);
    // console.log(products);
    return (
        <>
            {isLoading ? (
                <div className='sm:px-16 px-8 sm:py-24 py-12'>
                    <h1 className='text-2xl font-bold'>Loading...</h1>
                </div>
            ) : error ? (
                <div className='sm:px-16 px-8 sm:py-24 py-12'>
                    <h1 className='text-2xl font-bold'>Error: {error}</h1>
                </div>
            ) : 
            
            (
                <div className='sm:px-16 px-8 sm:py-24 py-12'>
                    <H_Products products={updatedProducts} />
                </div>
            )}
        </>
        
        
        
        // <div>ProductScreen</div>
    )
}

export default ProductScreen