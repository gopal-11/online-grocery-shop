import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import About from './components/About';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartCount(cartCount + 1);
    setCart(updatedCart);
  };

  const removeItemFromCart = (item) => {
    const updatedCart = cart.filter(
      (currentItem) => item.title !== currentItem.title
    );
    setCartCount(cartCount - Number(item.quantity));
    setCart(updatedCart);
  };

  useEffect(() => {
    const total = cart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  return (
    <div>
      <Router>
        <Header
          cart={cart}
          cartCount={cartCount}
          totalPrice={totalPrice}
          removeItemFromCart={removeItemFromCart}
        />
        <div className="wrapper">
          <Routes>
            <Route
              path={'/'}
              element={
                <Home
                  items={items}
                  addToCart={addToCart}
                  setItems={setItems}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  showCart={showCart}
                  setShowCart={setShowCart}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path={'/product-detail'}
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route path={'/about'} element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
