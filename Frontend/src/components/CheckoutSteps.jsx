import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <div className='w-full mt-20 sm:mt-9 flex justify-center gap-2 sm:gap-5 font-montserrat'>
        <div>
            {step1 ? (
                <Link to={'/login'}>
                    <button className='text-[#5c5742] font-bold'>Sign in</button>
                </Link>
            ) : (
                <button className='text-[#EBE5C2]' disabled>
                    sign in
                </button>
            )}
        </div>

        <div>
            <p className={`${step2 ? "text-[#5c5742]" : "text-[#EBE5C2]"}`}>{">>"}</p>
        </div>


        <div>
            {step2 ? (
                <Link to={'/shipping'}>
                    <button className='text-[#5c5742] font-bold'>Shipping</button>
                </Link>
            ) : (
                <button className='text-[#EBE5C2]' disabled>
                    Shipping
                </button>
            )}
        </div>

        <div>
            <p className={`${step3 ? "text-[#5c5742]" : "text-[#EBE5C2]"}`}>{">>"}</p>
        </div>


        <div>
            {step3 ? (
                <Link to={'/payment'}>
                    <button className='text-[#5c5742] font-bold'>Payment</button>
                </Link>
            ) : (
                <button className='text-[#EBE5C2]' disabled>
                    Payment
                </button>
            )}
        </div>

        <div>
            <p className={`${step4 ? "text-[#5c5742]" : "text-[#EBE5C2]"}`}>{">>"}</p>
        </div>


        <div>
            {step4 ? (
                <Link to={'/placeorder'}>
                     <button className='text-[#5c5742] font-bold'>Place Order</button>
                </Link>
            ) : (
                <button className='text-[#EBE5C2]' disabled>
                    Place Order
                </button>
            )}
        </div>
    </div>
    
    
  )
}

export default CheckoutSteps