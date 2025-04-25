import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 

import CartComponent from '../components/CartComponent';


const CartScreen = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    
    
    const cart = useSelector((state) => state.cart); 
    const { cartItems } = cart; 
    
    const totalItems = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);
    // console.log(cart);

    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping')
    }
    return (
        <>
            {/* <Nav /> */}

            <div className='sm:px-8 py-20 sm:py-24 flex xl:flex-row flex-col gap-4 w-full'>
                <div className='py-6 px-0 sm:py-8 mt-4 border-2 shadow-inner rounded-md xl:w-1/2'>
                    <h1 className='px-4 text-2xl sm:text-4xl font-semibold font-montserrat text-[#7f7f7f]'>Shopping Cart: </h1>

                    {cartItems.length === 0 ? (
                        
                        <div className='text-center py-8'>
                            <h1 className='text-2xl font-semibold font-montserrat text-[#7f7f7f]'>Your Cart is Empty</h1>
                        </div>
                    ) : (
                        <>
                            <section className="flex flex-col gap-4 sm:px-16 py-8">
                                {cartItems.map((item) => {
                                    return (
                                        <div className='border-b-2 ' key={item.product}>
                                            <CartComponent item={item} />
                                        </div>
                                    );
                                })}
                            </section>
                        </>
                    )}
                </div>

                { (
                    <div className='sm:px-16 px-4 pt-4 py-16 sm:py-8 mt-4 border-2 shadow-xl xl:w-1/2'>
                        <h1 className='text-3xl sm:text-3xl font-bold text-[#7f7f7f]'>Sub Total ({totalItems} items):</h1>
                        <div className='px-8 pt-2 pb-8 text-xl'>
                            <div className='flex justify-between'>
                                <p>Items Price: </p>
                                <p className='text-coral-red'>₹ {cart.itemPrice}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Shipping Price: </p>
                                <p className='text-coral-red'>₹ {(cartItems.length === 0) ? 0 : cart.shippingPrice}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Tax Price: </p>
                                <p className='text-coral-red'>₹ {cart.taxPrice}</p>
                            </div>
                            <div className='flex justify-between text-2xl font-bold sm:text-3xl'>
                                <p className=''>Total Price: </p>
                                <p className='text-coral-red'>₹ {(cartItems.length === 0) ? 0 :cart.totalPrice}</p>
                            </div>

                            <div className={`flex justify-end p-2 mt-8`}>
                                <button className={`border-2 border-[#5c5742] rounded-md bg-[#EBE5C2] p-4  hover:bg-[#5c5742] font-bold text-xl ${cartItems.length === 0 ? "border-gray-400 text-gray-400 bg-gray-300 hover:bg-gray-300 hover:text-gray-400 cursor-not-allowed" : "hover:text-white cursor-pointer"} `} onClick={checkoutHandler} disabled={cartItems.length === 0}>
                                    Proceed to Checkout
                                </button>
                            </div>
                            
                            {/* <p>Total Items: {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</p>
                            <p>Items Price: <span className='text-coral-red'>$ {cart.itemPrice}</span></p>
                            <p>Shipping Price (): <span className='text-coral-red'>$ {cart.shippingPrice}</span></p>
                            <p>Tax Price (18%): <span className='text-coral-red'> $ {cart.taxPrice}</span></p>
                            <p className='text-2xl font-bold sm:text-3xl'>Total Price: <span className='text-coral-red'> $ {cart.totalPrice}</span></p> */}
                        </div>
                    </div>
                )}
                
            </div>


            {/* <section className='bg-black padding'>
                <Footer />
            </section> */}
        </>
    );
}

export default CartScreen