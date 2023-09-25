import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images.png';

// import Cart from './Cart';
import '../index.css';
import '../App.css';
import Cart from './Cart';

const Header = ({ cart, cartCount, totalPrice, removeItemFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo-image" />
          </Link>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" exact activestyle={{ color: '#2a6496' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" exact activestyle={{ color: '#2a6496' }}>
                About
              </Link>
            </li>

            <li>
              <a className="cursor" onClick={() => setShowCart(!showCart)}>
                <i className="bi-cart" color="black"></i>
                <span className="margin-left4">{cartCount}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
      <Cart
        showCart={showCart}
        cart={cart}
        totalPrice={totalPrice}
        removeItemFromCart={removeItemFromCart}
      />
    </div>
  );
};

export default Header;
