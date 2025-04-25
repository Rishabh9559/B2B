import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { toast } from 'react-toastify';
import { useCreateOrderMutation } from '../slices/orderApiSlice';
import { clearCartItems } from '../slices/cartSlice';
// import CartComponent from '../components/cartComponent';
import OrderComponent from '../components/OrderComponent';
// import Message from '../components/Message';

const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const [createOrder, {isLoading, error}] = useCreateOrderMutation();

    useEffect (() => {
        if(!cart.paymentMethod) {
            navigate('/payment');
        }
        
        if(!cart.shippingAddress) {
            navigate('/shipping')
        }
    }, [cart.paymentMethod, cart.shippingAddress, navigate]);

    const totalItems = cart.cartItems.reduce((acc, item) => acc + Number(item.qty), 0);
    // console.log(cart);

    const placeOrderHandler = async () => {
        // console.log("Order Placed");
        try {
            const res = await createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemPrice: cart.itemPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            }).unwrap();
            dispatch(clearCartItems());
            navigate(`/order/${res._id}`);

            // console.log(res);
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || error.error);
        }
    }

    return (
        <div className='padding'>
            <div className='mb-10'>
                <CheckoutSteps step1 step2 step3 step4/>
            </div>

            <div className='border-b-2 m-4'>
                <h2 className='px-4 text-2xl sm:text-3xl font-semibold font-montserrat text-[#7f7f7f]'>Shipping Address: </h2>
                <p className='px-8 py-4 text-lg sm:text-xl font-montserrat text-[#000000]'>
                    {cart.shippingAddress.address + ", " + cart.shippingAddress.state + ", " + cart.shippingAddress.city + " - " + cart.shippingAddress.postalCode}
                </p>
            </div>

            <div className='border-b-2 m-4'>
                <h2 className='px-4 text-2xl sm:text-3xl font-semibold font-montserrat text-[#7f7f7f]'>Payment Method: </h2>
                <p className='px-8 py-4 text-lg sm:text-xl font-montserrat text-[#000000]'>
                    {cart.paymentMethod}
                </p>
            </div>

            <div className='sm:px-8 flex xl:flex-row flex-col gap-4 w-full'>
                <div className='py-6 px-0 sm:py-8 mt-4 border-2 shadow-inner rounded-md xl:w-1/2'>
                    <h2 className='px-4 text-2xl sm:text-3xl font-semibold font-montserrat text-[#7f7f7f]'>Order Items: </h2>

                    {cart.cartItems.length === 0 ? (
                        
                        <div className='text-center py-8'>
                            <h1 className='text-2xl font-semibold font-montserrat text-[#7f7f7f]'>Your Cart is Empty</h1>
                        </div>
                    ) : (
                        <>
                            <section className="flex flex-col gap-4 sm:px-16 py-8">
                                {cart.cartItems.map((item) => {
                                    return (
                                        <div className='border-b-2 ' key={item._id + item.size}>
                                            <OrderComponent item={item} />
                                        </div>
                                    );
                                })}
                            </section>
                        </>
                    )}
                </div>

                
                <div className='sm:px-16 px-4 pt-4 py-16 sm:py-8 mt-4 border-2 shadow-xl xl:w-1/2'>
                    <h1 className='text-3xl sm:text-3xl font-bold text-[#7f7f7f]'>Sub Total ({totalItems} items):</h1>
                    <div className='px-8 pt-2 pb-8 text-xl'>
                        <div className='flex justify-between'>
                            <p>Items Price: </p>
                            <p className='text-coral-red'>₹ {cart.itemPrice}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping Price: </p>
                            <p className='text-coral-red'>₹ {(cart.cartItems.length === 0) ? 0 : cart.shippingPrice}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Tax Price: </p>
                            <p className='text-coral-red'>₹ {cart.taxPrice}</p>
                        </div>
                        <div className='flex justify-between text-2xl font-bold sm:text-3xl'>
                            <p className=''>Total Price: </p>
                            <p className='text-coral-red'>₹ {(cart.cartItems.length === 0) ? 0 :cart.totalPrice}</p>
                        </div>

                        <div className='flex justify-end p-2 mt-8'>
                            <button className={`rounded-bl-xl rounded-tr-xl hover:rounded-xl border-2 p-4 font-semibold ${cart.cartItems.length === 0 ? "border-gray-400 text-gray-400 cursor-not-allowed" : "hover:bg-coral-red hover:text-white border-coral-red "} `} onClick={placeOrderHandler} disabled={cart.cartItems.length === 0}>
                                Place Order
                            </button>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>

            <div className='flex justify-center items-center mt-8'>
                <p className='text-2xl font-montserrat text-[#7f7f7f] font-semibold'>Thank you for shopping with us.</p>
            </div>
        </div>
    )
};

export default PlaceOrderScreen