import React from 'react'
import { Link } from 'react-router-dom'
import { convertIntoNumber } from '../utils/cartUtils'

const OrderComponent = ({item}) => {
    // console.log(item._id);
  return (
        <>
            <Link to={`/product/${item._id}`} className=''>
                <div className='flex w-full p-2 mb-2 rounded-lg font-montserrat hover:shadow-inner insert-shadow-sm hover:bg-[#fff7f6]'>
                        <div className='flex flex-row gap-4 w-full justify-between items-center '>  
                            <div className='flex flex-row gap-4'>
                                <div className="flex justify-center items-center w-20 min-w-[50px] h-20 min-h-[50px] bg-[#f5f5f5] rounded-lg">
                                    <img className='w-[50px]' src={item.image} alt={`Image of ${item.name}`} />
                                </div>
                                    
                                <div className='text-sm'>
                                    <h3>{item.name}</h3>
                                    <p className=''>Rate: <span className='text-coral-red'>₹ {item.price}</span></p>
                                    <p>Quantity: {item.qty}</p>

                                </div>
                            </div>

                            <div className='text-2xl font-semibold sm:text-3xl sm:font-bold'>
                            <p className='text-coral-red'>₹ {convertIntoNumber(item.price) * Number(item.qty)}</p>
                            </div>
                
                        </div>
                </div>
            </Link>
        </>

       
  )
}

export default OrderComponent