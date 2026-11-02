import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "../store/cartSlice";
import { formatPrice, FALLBACK_IMAGE } from "../utils";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  if (items.length === 0) {
    return (
      <section className="empty-state">
        <h1 className="page-title">Your Cart</h1>
        <p className="empty">Your cart is empty 🛒</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1 className="page-title">Your Cart</h1>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="muted">{formatPrice(item.price)} each</p>
            </div>

            <div className="qty">
              <button
                className="qty-btn"
                onClick={() => dispatch(decreaseQuantity(item.id))}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                −
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => dispatch(increaseQuantity(item.id))}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>

            <p className="line-total">{formatPrice(item.price * item.quantity)}</p>

            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p>
          Items: <strong>{totalItems}</strong>
        </p>
        <p className="summary-total">
          Total: <strong>{formatPrice(totalPrice)}</strong>
        </p>
        <div className="summary-actions">
          <button className="btn btn-outline" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          <button className="btn btn-primary" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
