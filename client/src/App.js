
import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './components/Cart';
import NotFound from './pages/NotFound';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiFetch from './components/ApiFetch';
import { CartProvider } from './providers/CartProvider';
import { UserProvider } from './providers/UserProvider';
import UserProfile from './hooks/UserProfile';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    
      <UserProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/" element={<Layout />}>  
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/pokemons" element={<ApiFetch />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <ToastContainer />
        </Router>
        <Footer />
      </CartProvider>
      </UserProvider>




   
  );
}

export default App;
