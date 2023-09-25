import { useLocation } from 'react-router-dom';
import '../App.css';
const ProductDetail = ({ addToCart }) => {
  const location = useLocation();
  const item = location.state.item;

  return (
    <div>
      <div className="product-detail" key={item.title}>
        <img src={item.image} className="product-image" alt={item.title} />
        <div className="product-desc">
          <h1>
            <b>{item?.title}</b>
          </h1>
          <span>Price: ${item?.price}</span>
          <span>Description: {item?.description}</span>
          <div>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
