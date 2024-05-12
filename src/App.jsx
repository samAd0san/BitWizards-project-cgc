import './App.css'
import About from './compnents/About';
import Features from './compnents/Features';
import Home from './compnents/Home';
import NavBar from './compnents/NavBar';
import NewsLetter from './compnents/NewsLetter';
import Footer from './shared/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Features />
      <About />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
