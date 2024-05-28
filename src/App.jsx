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
import { useState } from 'react';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <NavBar />

          <Routes>
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

            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} /> {/* Add a NotFound component */}
          </Routes>

          <NewsLetter />
          <Footer />
        </UserContext.Provider>

      </BrowserRouter>
    </>
  )
}

export default App
