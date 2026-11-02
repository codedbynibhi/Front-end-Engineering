const img = (seed) => `https://picsum.photos/seed/${seed}/480/360`;

export const products = [
  { id: 1, name: "Wireless Headphones", price: 2499, category: "Electronics", image: img("headphones-ms") },
  { id: 2, name: "Smart Watch", price: 3999, category: "Electronics", image: img("smartwatch-ms") },
  { id: 3, name: "Bluetooth Speaker", price: 1799, category: "Electronics", image: img("speaker-ms") },
  { id: 4, name: "Running Shoes", price: 2999, category: "Fashion", image: img("shoes-ms") },
  { id: 5, name: "Denim Jacket", price: 1999, category: "Fashion", image: img("jacket-ms") },
  { id: 6, name: "Leather Backpack", price: 2299, category: "Accessories", image: img("backpack-ms") },
  { id: 7, name: "Sunglasses", price: 899, category: "Accessories", image: img("sunglasses-ms") },
  { id: 8, name: "Ceramic Coffee Mug", price: 349, category: "Home", image: img("mug-ms") },
  { id: 9, name: "Desk Lamp", price: 1199, category: "Home", image: img("desklamp-ms") },
  { id: 10, name: "Yoga Mat", price: 799, category: "Home", image: img("yogamat-ms") },
  { id: 11, name: "Mechanical Keyboard", price: 3499, category: "Electronics", image: img("keyboard-ms") },
  { id: 12, name: "Canvas Tote Bag", price: 499, category: "Accessories", image: img("totebag-ms") },
];

export const categories = ["All", ...new Set(products.map((p) => p.category))];
