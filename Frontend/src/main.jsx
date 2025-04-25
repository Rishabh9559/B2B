import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Layout from './components/Layout.jsx';
// import Product from './components/product.jsx';
import LoginScreen from './Screens/LoginScreen.jsx';
import RegisterScreen from './Screens/RegisterScreen.jsx';
import ProductScreen from './Screens/ProductScreen.jsx';
import ProductDetailScreen from './Screens/ProductDetailScreen.jsx';
import CartScreen from './Screens/CartScreen.jsx';

import { Provider } from 'react-redux';
import store from './store.js';
import ShippingScreen from './Screens/ShippingScreen.jsx';
import PaymentScreen from './Screens/PaymentScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import PlaceOrderScreen from './Screens/PlaceOrderScreen.jsx';


// import ProductDetail from './components/ProductDetail.jsx'; // Ensure these components exist

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<App />} />
      <Route path='/products' element={<ProductScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/product/:id' element={<ProductDetailScreen />} /> 
      <Route path='cart' element={<CartScreen />} />
      <Route path='/products/:category' element={<ProductScreen />} />

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
      </Route>
      {/* <Route path='/products/:id' element={<ProductDetail />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
);
