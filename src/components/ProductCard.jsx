import { formatPrice, FALLBACK_IMAGE } from "../utils";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = FALLBACK_IMAGE;
        }}
      />
      <div className="card-body">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">{formatPrice(product.price)}</p>
        <button className="btn btn-primary" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
