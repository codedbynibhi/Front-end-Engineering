

import { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 2499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Classic Sneakers",
    category: "Footwear",
    price: 3299,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Minimal Watch",
    category: "Accessories",
    price: 1899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Everyday Backpack",
    category: "Bags",
    price: 1599,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
  }
];

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(price);

  return (
    <div className="shop">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">S</span>
          ShopEasy<span className="brand-dot">.</span>
        </a>

        <nav className="nav-links">
          <a href="#home" className="active-link">Home</a>
          <a href="#products">Shop</a>
          <a href="#products">Collections</a>
        </nav>

        <a href="#cart" className="cart-link">
          <span className="cart-symbol">🛍</span>
          <span>Cart</span>
          <span className="cart-count">{totalItems}</span>
        </a>
      </header>

      <main id="home" className="main-content">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">YOUR EVERYDAY MARKETPLACE</span>
            <h1>
              Good finds.
              <br />
              <span>Great prices.</span>
            </h1>
            <p>
              Discover products you'll love, picked for your
              everyday life.
            </p>
            <a href="#products" className="hero-button">
              Explore collection <span>→</span>
            </a>
            <div className="hero-note">
              <span className="note-icon">✦</span>
              Quality picks. Hassle-free shopping.
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-circle"></div>
            <div className="hero-label">
              <span>THE DAILY EDIT</span>
              <strong>Little things.<br />Big joy.</strong>
            </div>
            <div className="floating-tag">✨ Curated for you</div>
          </div>
        </section>

        <section className="benefits">
          <div className="benefit">
            <span className="benefit-icon">🚚</span>
            <div>
              <strong>Free delivery</strong>
              <p>On every order</p>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">↩</span>
            <div>
              <strong>Easy returns</strong>
              <p>Simple and stress-free</p>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">♡</span>
            <div>
              <strong>Made for you</strong>
              <p>Handpicked essentials</p>
            </div>
          </div>
        </section>

        <section id="products" className="products-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE SHOP EDIT</span>
              <h2>Popular right now<span>.</span></h2>
              <p>Everyday favourites worth checking out.</p>
            </div>
            <span className="product-count">
              {products.length} products
            </span>
          </div>

          <div className="product-grid">
            {products.map((product, index) => {
              const inCart = state.cart.some(
                item => item.id === product.id
              );

              return (
                <article className="product-card" key={product.id}>
                  <div className={`product-image image-${index + 1}`}>
                    <img src={product.image} alt={product.name} />
                    {index === 0 && (
                      <span className="product-badge">BESTSELLER</span>
                    )}
                    <span className="rating">
                      ★ {product.rating}
                    </span>
                  </div>

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>
                    <h3>{product.name}</h3>

                    <div className="product-bottom">
                      <strong className="product-price">
                        {formatPrice(product.price)}
                      </strong>
                      <button
                        className={`add-button ${inCart ? "added" : ""}`}
                        onClick={() => addToCart(product)}
                      >
                        {inCart ? "Add more +" : "＋ Add"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="cart" className="cart-section">
          <div className="cart-main">
            <div className="section-heading cart-heading">
              <div>
                <span className="eyebrow">ALMOST YOURS</span>
                <h2>Your shopping bag<span>.</span></h2>
                <p>
                  {totalItems} {totalItems === 1 ? "item" : "items"} in
                  your bag
                </p>
              </div>

              {state.cart.length > 0 && (
                <button className="clear-button" onClick={clearCart}>
                  Clear bag
                </button>
              )}
            </div>

            {state.cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-icon">🛍️</div>
                <h3>Your bag is waiting for something good</h3>
                <p>Explore the collection and add your favourites.</p>
                <a href="#products" className="hero-button">
                  Start shopping →
                </a>
              </div>
            ) : (
              <div className="cart-items">
                {state.cart.map(item => (
                  <article className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <span className="product-category">
                        {item.category}
                      </span>
                      <h3>{item.name}</h3>
                      <strong>{formatPrice(item.price)}</strong>
                      <button
                        className="remove-button"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="cart-item-end">
                      <div className="quantity-control">
                        <button
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => decreaseItem(item.id)}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => increaseItem(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <strong className="line-total">
                        {formatPrice(item.price * item.quantity)}
                      </strong>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <aside className="order-card">
            <span className="eyebrow">YOUR ORDER</span>
            <h3>Order summary</h3>

            <div className="summary-line">
              <span>Subtotal ({totalItems} items)</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <strong className="free-delivery">FREE</strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>

            <button
              className="checkout-button"
              disabled={state.cart.length === 0}
              onClick={() =>
                alert("Checkout UI demo. Payment is not connected yet.")
              }
            >
              Proceed to checkout <span>→</span>
            </button>

            <p className="secure-note">♢ Secure and simple shopping</p>

            <div className="payment-note">
              <span>✓</span> No hidden delivery charges
            </div>
          </aside>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">S</span>
          ShopEasy<span className="brand-dot">.</span>
        </a>
        <p>Good finds for your everyday life.</p>
        <span>© 2026 ShopEasy</span>
      </footer>
    </div>
  );
}

export default App;