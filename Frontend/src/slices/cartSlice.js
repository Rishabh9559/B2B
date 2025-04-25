import { createSlice } from '@reduxjs/toolkit'; // Import createSlice from redux toolkit to create a slice.
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: [], shippingAddress: '', paymentMethod: 'PayPal'}; // The initial state of the cart slice. If there is a cart in the local storage, then use that as the initial state. Otherwise, use an empty object.




const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        
        addToCart: (state, action) => {
            const item = action.payload; 
            
            const existItem = state.cartItems.find((x) => (x._id === item._id));

            if(existItem){
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            }
            else{
                state.cartItems = [...state.cartItems, item];
            }

           
            
            return updateCart(state); 
        },

        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter((x) => !(x._id === item._id));
            return updateCart(state);
        },

        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },

        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },

        clearCartItems: (state, action) => {
            state.cartItems = [];
            return updateCart(state);
        } 
    }, // The reducers contains the functionalities of the current slice. In this case it will contain functionalities like adding to cart, removing to cart etc.
});

export const {addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, clearCartItems} = cartSlice.actions; // Export the actions from the slice.
export default cartSlice.reducer; // Export the reducers from the slice.