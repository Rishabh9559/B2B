import {configureStore} from '@reduxjs/toolkit'; // Import configureStore from redux toolkit to create a store.
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice'; // Import the cartSlice from the slices folder.
import authSliceReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, 
        cart: cartSliceReducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware), 
    devTools: true, 
});

export default store;