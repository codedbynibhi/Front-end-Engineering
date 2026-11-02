import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils";

export default function OrderConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  // Visiting this URL directly (no order in router state)
  if (!order) {
    return (
      <section className="empty-state">
        <h1 className="page-title">Order Confirmation</h1>
        <p className="empty">No recent order to show.</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="confirmation">
      <h1 className="page-title">🎉 Thank you, {order.customer.name}!</h1>
      <p className="muted">
        Order <strong>{order.id}</strong> has been placed. A confirmation will be
        sent to {order.customer.email}.
      </p>

      <div className="summary order-summary">
        <h2>Order summary</h2>
        <ul className="summary-list">
          {order.items.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <p className="summary-total">
          Total paid: <strong>{formatPrice(order.total)}</strong>
        </p>
        <p className="muted">Shipping to: {order.customer.address}</p>
      </div>

      <button className="btn btn-primary" onClick={() => navigate("/products")}>
        Continue Shopping
      </button>
    </section>
  );
}
