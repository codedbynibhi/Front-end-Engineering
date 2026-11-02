import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Welcome to Mini Store</h1>
      <p>
        Discover great products at friendly prices. Browse the collection, add
        your favourites to the cart and check out in a few clicks.
      </p>
      <div className="hero-actions">
        <button className="btn btn-primary btn-lg" onClick={() => navigate("/products")}>
          Shop Products
        </button>
        <button className="btn btn-outline btn-lg" onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>
    </section>
  );
}
