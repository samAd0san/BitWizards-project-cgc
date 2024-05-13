import './App.css'
import About from './compnents/About';
import Activities from './compnents/Activites';
import Features from './compnents/Features';
import Home from './compnents/Home';
import NavBar from './compnents/NavBar';
import NewsLetter from './compnents/NewsLetter';
import Products from './compnents/Products';
import Footer from './shared/Footer';
import Signup from './compnents/Signup'
import NotFound from './compnents/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<About />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/products' element={<Products />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} /> {/* Add a NotFound component */}
        </Routes>

        {window.location.pathname !== '/signup' && <NewsLetter />}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
