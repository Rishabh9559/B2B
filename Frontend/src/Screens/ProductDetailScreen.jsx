import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import ProductDetail from '../components/ProductDetail.jsx'
import { useGetProductsDetailsQuery, useGetProductsQuery } from '../slices/productsApiSlice.js'


const ProductDetailScreen = () => {

  const { id } = useParams();
  const {data: product, isLoading, error} = useGetProductsDetailsQuery(id);



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
          <section>
            <ProductDetail product={product} />
          </section>
        </div>
      )}
      
    </>
  )
}

export default ProductDetailScreen