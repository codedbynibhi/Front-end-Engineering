import { createSlice } from "@reduxjs/toolkit";

export const CART_STORAGE_KEY = "mini-store-cart";

// Bonus Level 2: restore the cart from localStorage on first load
const loadItems = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: loadItems() },
  reducers: {
    // Add a product, or increase its quantity if it is already in the cart
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    // Remove a product completely
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Increase quantity by 1
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    // Decrease quantity by 1 (the item is removed if it reaches 0)
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    // Remove all cart items
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
