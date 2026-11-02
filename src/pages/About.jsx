import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about">
      <h1 className="page-title">About Mini Store</h1>
      <p>
        Mini Store is a small demo shop built with React, React Router and Redux
        Toolkit. It was created to practise routing, global state management and
        building a realistic shopping flow from browsing to checkout.
      </p>
      <p>
        We stock a handful of everyday favourites across electronics, fashion,
        accessories and home essentials - all at simple, fair prices.
      </p>
      <ul className="about-list">
        <li>🚚 Free delivery on orders above ₹999</li>
        <li>↩️ Easy 7-day returns</li>
        <li>💬 Friendly customer support</li>
      </ul>
      <Link to="/" className="btn btn-primary">
        ← Back to Home
      </Link>
    </section>
  );
}
