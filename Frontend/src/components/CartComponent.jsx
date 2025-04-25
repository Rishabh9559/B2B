import React, { useState } from 'react'
import { trash } from '../assets/icons';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';



const CartComponent = ({item}) => {
  const dispatch = useDispatch();

  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showDialogForMaxStock, setShowDIalogForMaxStock] = useState(false);

  const doNothing = () => {
    setShowDIalogForMaxStock(false);
  }
  const showMessForMaxStock = () => {
    setShowDIalogForMaxStock(true);
  }

  const removeItemHandler = () => {
    // const userConfirmed = window.confirm("Are you sure? The item will be removed from cart!");
    // if(userConfirmed){
      // dispatch(removeFromCart(item));
    // }
    setShowDialogBox(true);
  }

  const confirmRemoval = () => {
    dispatch(removeFromCart(item));
    setShowDialogBox(false);
  }

  const cancelRemoval = () => {
    setShowDialogBox(false);
  }

  const convertIntoNumber = (num) => {
    const number = Number(num.replace(/,/g, ''));
    // console.log(number);

    return number;
  } 
  
  const reduceCartItemHandler = () => {
    // console.log(item);
    if(item.qty === 1){
      setShowDialogBox(true);
      // setTimeout(() => removeItemHandler(), 0);
    }
    else{
      dispatch(addToCart({...item, qty: (item.qty == 1) ? 1 : Number(item.qty) - 1}));
    }
    // (item.qty === 1) ? 
    //   removeItemHandler() :
    //   dispatch(addToCart({...item, qty: Number(item.qty) - 1}));
  }

  const addCartItemHandler = () => {
    const stock = item.stock;
    (item.qty === item.stock) ? 
      showMessForMaxStock() :
      dispatch(addToCart({...item, qty: (item.qty == stock) ? stock : Number(item.qty) + 1}));
  }

  return (
    <div className='flex justify-between w-full p-4 mb-4 rounded-lg font-montserrat hover:shadow-inner insert-shadow-sm'>
      <div className='flex gap-4'>  
        <div className="1/8">
          <img className='w-40 min-w-[160px]' src={item.image} alt={`Image of ${item.name}`} />
        </div>
        
        <div className=''>
          <h3>{item.name}</h3>
          <p className=''>Rate: <span className='text-coral-red'>$ {item.price}</span></p>
          <p>Quantity: </p>
          <div className='flex gap-2 mb-4'>
            <button onClick={() => addCartItemHandler()} className='px-1.5 bg-slate-200 rounded-md text-xl'>+</button>
            <div className='border-2 px-2 rounded-md border-slate-200'>{item.qty}</div>
            <button onClick={() => reduceCartItemHandler()} className='px-2 bg-coral-red rounded-md text-xl'>-</button>
          </div>
          
          {/* <p>{item.inStock}</p> */}
          <p>Price: <span className='text-coral-red'>₹ {(convertIntoNumber(item.price) * Number(item.qty)).toFixed(2)}</span></p>
        </div>
      </div>
      
      <div className='flex items-center'>
        <button onClick={() => removeItemHandler()} className='cursor:pointer'>
          <img className='min-w-[24px] min-h-[24px]' width={24} src={trash} alt="remove from cart button cursor:pointer" />
        </button>
      </div>

      {/* The custom dialog box for removing item from the cart */}
      {showDialogBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#ebe5c244]">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to remove this item?</p>
            <div className="flex justify-end gap-4">
              <button onClick={cancelRemoval} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
              <button onClick={confirmRemoval} className="border-2 border-[#5c5742] rounded-md bg-[#EBE5C2] hover:text-white p-4 cursor-pointer hover:bg-[#5c5742] font-bold text-xl">Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* Dialog box for maximum stock reached */}
      {showDialogForMaxStock && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#ebe5c244]">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Can't add any more items. Max Stock reached!</p>
            <div className="flex justify-end gap-4">
              <button onClick={doNothing} className="px-4 py-2 bg-coral-red text-white rounded-md">Ok</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent