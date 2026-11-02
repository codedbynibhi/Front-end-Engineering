import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import Toast from "../components/Toast";

export default function Products() {
  const dispatch = useDispatch();
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    setToast(`${product.name} added to cart`);
  };

  const closeToast = useCallback(() => setToast(""), []);

  // Bonus Level 1: search + category filter
  const visibleProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(term)
    );
  }, [search, category]);

  return (
    <section>
      <h1 className="page-title">Products</h1>

      <div className="filters">
        <input
          type="search"
          className="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />
        <div className="chips">
          {categories.map((c) => (
            <button
              key={c}
              className={c === category ? "chip chip-active" : "chip"}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <p className="empty">No products match your search.</p>
      ) : (
        <div className="grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={handleAdd} />
          ))}
        </div>
      )}

      <Toast message={toast} onClose={closeToast} />
    </section>
  );
}
