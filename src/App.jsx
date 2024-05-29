import './App.css'
import About from './compnents/About';
import Activities from './Activities/ActivityList';
import Features from './compnents/Features';
import Home from './compnents/Home';
import NavBar from './compnents/NavBar';
import NewsLetter from './compnents/NewsLetter';
import Products from './Product/ProductList';
import Footer from './shared/Footer';
import NotFound from './compnents/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './Product/ProductDetail';
import NewProduct from './Product/NewProduct';
import ActivityDetail from './Activities/ActivityDetail';
import NewActivity from './Activities/NewActivity';
import UpdateActivity from './Activities/UpdateActivity';
import Signin from './user/Signin';
import Signup from './user/Signup';

import UserContext from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { useEffect, useState } from 'react';
import Cart from './compnents/Cart';

function App() {

  // This initializes the isLoggedIn state to true if a token is found in localStorage, otherwise to false.
  const [isLoggedIn, setLoggedIn] = useState(()=> !!localStorage.getItem('token'));

  /* This useEffect ensures that the isLoggedIn state is synced with localStorage, storing 'true' if the user is logged in and removing
   the item if they are logged out, whenever isLoggedIn changes. */
  useEffect(()=>{
    if(isLoggedIn){
      localStorage.setItem('isLoggedIn','true');
    }else{
      localStorage.removeItem('isLoggedIn');
    }
  },[isLoggedIn]);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <CartProvider> {/* wraps the main application component with CartProvider to provide the cart context to the entire application */}

          <NavBar />

          <Routes>
            {/* Basic Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<Features />} />
            <Route path='/about' element={<About />} />

            {/* Activities Routes */}
            <Route path='/activities' element={<Activities />} />
            <Route path='/activities/:id' element={<ActivityDetail />} />
            <Route path='/activities/new' element={<NewActivity />} />
            <Route path='/activities/update/:id' element={<UpdateActivity />} />

            {/* Products Routes */}
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/products/new' element={<NewProduct />} />

            {/* Cart Routes */}
            <Route path='/cart' element={<Cart />} />

            {/* Auth Routes */}
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />

            {/* Add a NotFound component */}
            <Route path='*' element={<NotFound />} /> 
          </Routes>

          <NewsLetter />
          <Footer />

          </CartProvider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
