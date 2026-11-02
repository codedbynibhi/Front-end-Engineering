import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems, selectTotalPrice } from "../store/cartSlice";
import { formatPrice } from "../utils";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  if (items.length === 0) {
    return (
      <section className="empty-state">
        <h1 className="page-title">Checkout</h1>
        <p className="empty">Your cart is empty, so there is nothing to check out.</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </section>
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      customer: form,
      items,
      total: totalPrice,
    };
    dispatch(clearCart());
    // Pass the order summary to the confirmation page via router state
    navigate("/order-confirmation", { state: { order }, replace: true });
  };

  return (
    <section>
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-layout">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Shipping details</h2>
          <label>
            Full name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Address
            <textarea name="address" rows="3" value={form.address} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary btn-lg">
            Place Order · {formatPrice(totalPrice)}
          </button>
        </form>

        <aside className="summary order-summary">
          <h2>Order summary</h2>
          <ul className="summary-list">
            {items.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <p className="summary-total">
            Total: <strong>{formatPrice(totalPrice)}</strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
