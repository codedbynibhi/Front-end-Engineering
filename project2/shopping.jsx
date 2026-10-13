import React, { useState } from "react";

const productList = [
  { id: 1, name: "Wireless Mouse", price: 599, category: "Electronics", emoji: "🖱️" },
  { id: 2, name: "Bluetooth Headphones", price: 1499, category: "Electronics", emoji: "🎧" },
  { id: 3, name: "Mechanical Keyboard", price: 2299, category: "Electronics", emoji: "⌨️" },
  { id: 4, name: "Smart Watch", price: 3499, category: "Electronics", emoji: "⌚" },
  { id: 5, name: "Coffee Mug", price: 199, category: "Home", emoji: "☕" },
  { id: 6, name: "Table Lamp", price: 899, category: "Home", emoji: "💡" },
  { id: 7, name: "Backpack", price: 1299, category: "Fashion", emoji: "🎒" },
  { id: 8, name: "Running Shoes", price: 2599, category: "Fashion", emoji: "👟" },
  { id: 9, name: "Sunglasses", price: 799, category: "Fashion", emoji: "🕶️" },
  { id: 10, name: "Notebook Set", price: 149, category: "Stationery", emoji: "📓" },
  { id: 11, name: "Water Bottle", price: 349, category: "Home", emoji: "🚰" },
  { id: 12, name: "Desk Organizer", price: 499, category: "Home", emoji: "🗂️" },
  { id: 13, name: "Gaming Mousepad", price: 399, category: "Electronics", emoji: "🖲️" },
  { id: 14, name: "Plant Pot", price: 249, category: "Home", emoji: "🪴" },
  { id: 15, name: "Wallet", price: 699, category: "Fashion", emoji: "👛" },
  { id: 16, name: "Power Bank", price: 1199, category: "Electronics", emoji: "🔋" },
];


function ProductCard(props) {
  
  const { name, price, category, emoji, onAddToCart } = props;

  return (
    <div className="product-card">
      <div className="product-image">{emoji}</div>
      <span className="product-category">{category}</span>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₹{price}</p>
      <button className="add-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}


export default function ProductDisplay() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart(productName) {
    setCartCount(cartCount + 1);
    console.log(productName + " added to cart");
  }

  return (
    <div className="page">
      {}
      <div className="header">
        <h1>Our Products</h1>
        <div className="cart">🛒 Cart: {cartCount}</div>
      </div>

      {}
      <div className="product-grid">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            emoji={product.emoji}
            onAddToCart={() => handleAddToCart(product.name)}
          />
        ))}
      </div>

      {}
      <style>{`
        .page {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          padding: 20px;
          min-height: 100vh;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .header h1 {
          color: #333;
        }

        .cart {
          background-color: #ffffff;
          padding: 10px 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-weight: bold;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 18px;
        }

        .product-card {
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          transition: box-shadow 0.2s ease;
        }

        .product-card:hover {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .product-image {
          font-size: 50px;
          margin-bottom: 10px;
        }

        .product-category {
          display: inline-block;
          background-color: #eef2ff;
          color: #4f46e5;
          font-size: 12px;
          padding: 3px 8px;
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .product-name {
          font-size: 16px;
          margin: 6px 0;
          color: #222;
        }

        .product-price {
          font-size: 15px;
          font-weight: bold;
          color: #16a34a;
          margin-bottom: 12px;
        }

        .add-btn {
          background-color: #4f46e5;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          width: 100%;
        }

        .add-btn:hover {
          background-color: #4338ca;
        }
      `}</style>
    </div>
  );
}