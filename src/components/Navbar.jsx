import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems, selectTotalPrice } from "../store/cartSlice";
import { formatPrice } from "../utils";

export default function Navbar() {
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  // NavLink gives us `isActive`, which we use to highlight the current page
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          🛍️ Mini Store
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
            <span className="badge" aria-label={`${totalItems} items in cart`}>
              {totalItems}
            </span>
            <span className="nav-total">{formatPrice(totalPrice)}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
