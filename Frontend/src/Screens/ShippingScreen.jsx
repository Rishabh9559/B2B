import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { saveShippingAddress } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;

    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [city, setCity] = useState(shippingAddress?.city || '');
    const [state, setState] = useState(shippingAddress?.state || '');
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
    const [country, setCountry] = useState(shippingAddress?.country || '');
    
    
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(saveShippingAddress({address, city, state, postalCode, country}));
      navigate('/payment');
    }

  
  return (
    <>
        {/* <Nav /> */}
        <div className='padding'>
            <div className='mt-30'>
                <CheckoutSteps step1 step2/>
            </div>

            <div className='w-full flex justify-center items-center font-montserrat'>
                
                <div className='w-[1000px] p-12 border-x-2 mt-16'>
                    <h1 className='text-3xl mb-4 font-bold text-coral-red'>Shipping Address </h1>
                
                    <form className='flex flex-col gap-4' onSubmit={(e) => submitHandler(e)}>
                        <label className='flex flex-col gap-2'>
                            Address: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='w-full px-4 focus:outline-none bg-[#fffbfb00]' placeholder='Enter the Address' type= "text" value={address} onChange={(e) => setAddress((a) => a = e.target.value)} required />
                                {/* <img className='w-auto h-6' src={account} alt="" /> */}
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            City: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='w-full px-4 focus:outline-none bg-[#fffbfb00]' type= "text" value={city} onChange={(e) => setCity((a) => a = e.target.value)} required />
                                {/* <img className='w-auto h-6' src={account} alt="" /> */}
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            State: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='w-full px-4 focus:outline-none bg-[#fffbfb00]' type= "text" value={state} onChange={(e) => setState((a) => a = e.target.value)} required />
                                {/* <img className='w-auto h-6' src={account} alt="" /> */}
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Postal Code: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='w-full px-4 focus:outline-none bg-[#fffbfb00]' type= "text" value={postalCode} onChange={(e) => setPostalCode((a) => a = e.target.value)} required />
                                {/* <img className='w-auto h-6' src={account} alt="" /> */}
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Country: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='w-full px-4 focus:outline-none bg-[#fffbfb00]' type= "text" value={country} onChange={(e) => setCountry((a) => a = e.target.value)} required />
                                {/* <img className='w-auto h-6' src={account} alt="" /> */}
                            </div>
                        </label>



                        <div className='mt-4 flex justify-center items-center'>
                            <button className='p-4 rounded-bl-xl rounded-tr-xl hover:rounded-xl border-2 border-coral-red hover:bg-coral-red hover:text-white' type='submit'>
                                {'Contine ->'}
                            </button>
                        </div>
                        
                        
                    </form>


                </div>
            </div>

        </div>
    

    </>
    
  )

}

export default ShippingScreen;