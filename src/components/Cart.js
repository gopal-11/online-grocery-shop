import '../App.css';

const Cart = ({ showCart, cart, totalPrice, removeItemFromCart }) => {
  let popup = document.getElementById('popup');

  if (popup) {
    if (showCart) {
      popup.classList.add('popup-open');
    } else {
      popup.classList.remove('popup-open');
    }
  }

  return (
    <div className="popup" id="popup">
      <h1>Cart Details</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div style={{ margin: '10px 0px' }}>
              <b>
                {`${item.title} x ${item.quantity} = $${
                  item.quantity * item.price
                }`}{' '}
                <i
                  className="bi bi-trash"
                  id={item.title}
                  onClick={() => {
                    removeItemFromCart(item);
                  }}
                ></i>
              </b>
            </div>
          ))}
          <div>
            <h4>Total: ${totalPrice}</h4>
          </div>
        </>
      ) : (
        <div>Your cart is empty. Add item to cart.</div>
      )}
    </div>
  );
};

export default Cart;
