import React from 'react'
// import Product from '../components/Product.jsx'
import ProductCard from './ProductCard.jsx'
import { Link } from 'react-router-dom'

const H_Products = ({products}) => {
  return (
    <div className='container mx-auto px-4 py-16 sm:py-8'>
        <div className='gap-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          {products.map((product) => (
            <Link
              to={`/product/${product._id}`}
              className="block h-full" // Ensure ProductCard takes full height
              key={product._id}
            >
              <ProductCard
                key={product._id}
                price={product.price}
                name={product.name}
                image={product.image}
                rating={product.rating}
              />
            </Link>
          ))}
        </div>
        
    </div>
  )
}

export default H_Products