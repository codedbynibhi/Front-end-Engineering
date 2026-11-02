import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CART_STORAGE_KEY } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Bonus Level 2: save the cart to localStorage whenever it changes
let previousItems = store.getState().cart.items;
store.subscribe(() => {
  const items = store.getState().cart.items;
  if (items === previousItems) return;
  previousItems = items;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage may be unavailable (private mode / quota) - ignore
  }
});
