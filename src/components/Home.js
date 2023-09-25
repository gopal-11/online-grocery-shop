import { useNavigate } from 'react-router-dom';
import '../App.css';

import { useEffect } from 'react';
const Home = ({ addToCart, items, setItems }) => {
  const goto = useNavigate();
  // Fetch data from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="items">
      {items.map((item) => (
        <div
          className="product"
          key={item.title}
          onClick={() => {
            goto('/product-detail', { state: { item } });
          }}
        >
          <img src={item.image} className="product-image" alt={item.title} />
          <div className="card-desc">
            <span>
              <b>{item?.title}</b>
            </span>
            <span>Price: ${item?.price}</span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
