import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import { cod, paypalLogo } from '../assets/icons'
import { savePaymentMethod } from '../slices/cartSlice'

const PaymentScreen = () => {  
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const {shippingAddress} = cart; 
  
  useEffect(() => {
    if(!shippingAddress){
      navigate('/shipping');
    }
  }, [shippingAddress, navigate])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  }

  return (
    <div className='padding'>
        <div className='mt-30'>
            <CheckoutSteps step1 step2 step3/>
        </div>

        <div className='w-full flex justify-center items-center font-montserrat'>
          <div className='w-[1000px] p-12 border-x-2 mt-16'>
          <h1 className='text-3xl mb-4 font-bold text-coral-red'>Payment Method </h1>
            <form className='ml-4 flex gap-4 flex-col' onSubmit={(e) => submitHandler(e)} required>
              <div className='border-2 w-64 p-2 rounded-lg'>
                <label className='flex border-'>
                  <input type='radio' name='paymentMethod' value='PayPal' className='mr-4' onChange={(e) => setPaymentMethod(e.target.value)}/>
                  <p>PayPal or Credit Card <span><img width={30} src={paypalLogo} alt="paypal" /></span></p>
                </label>
              </div>
              <div className='border-2 w-64 p-2 rounded-lg'>
                <label className='flex gap-2 border-'>
                  <input type='radio' name='paymentMethod' value='cod' className='mr-4' onChange={(e) => setPaymentMethod(e.target.value)}/>
                  <p>Cash on Delivery <span><img width={30} src={cod} alt="cash on delivery" /></span></p>
                </label>
              </div>

              <div className='mt-4 flex justify-center items-center'>
                <button className='p-4 rounded-bl-xl rounded-tr-xl hover:rounded-xl border-2 border-coral-red hover:bg-coral-red hover:text-white' type='submit'>
                    {'Contine ->'}
                </button>
              </div>
            </form>
          </div>
            
        </div>

    </div>
  )
}

export default PaymentScreen