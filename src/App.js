import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import Swimming from './Swimming';
import Tennis from './Tennis';
import Football from './Football';
import Basketball from './Basketball';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Boutique from './Boutique';
import Cart from './Cart';
import { CartProvider } from './context/CartContext';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />
          <Route path="/swimming" element={<Swimming />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/profile"
            element={loggedInUser ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider >
  );
}

export default App;
