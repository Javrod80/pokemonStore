
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './components/Cart';
import NotFound from './pages/NotFound';
import NavBar from './pages/NavBar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiFetch from './components/ApiFetch';
import { CartProvider } from './components/CartProvider';





function App() {
  return (
    <div className='Container'>
      <CartProvider>
        <Router>
          <Header />
          <NavBar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemons" element={<ApiFetch />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

          <Footer />
        </Router>
      </CartProvider>




    </div>
  );
}

export default App;
