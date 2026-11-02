# Mini Store

A mini e-commerce app built with **React**, **React Router DOM** and **Redux Toolkit**.

## Run it

```bash
npm install
npm run dev      # development server
npm run build    # production build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home - welcome banner, buttons to Products and Cart |
| `/products` | 12 products with search + category filter, Add to Cart, confirmation toast |
| `/cart` | Quantities (+ / −), remove, clear, total price, empty-cart message |
| `/about` | Store info with a link back to Home |
| `/checkout` | Shipping form + order summary (bonus) |
| `/order-confirmation` | Order summary after `navigate()` from checkout (bonus) |
| `*` | 404 page |

## Redux Toolkit

`src/store/cartSlice.js` contains `addToCart`, `removeFromCart`, `increaseQuantity`,
`decreaseQuantity`, `clearCart` plus selectors for the item count and total price.
`src/store/store.js` uses `configureStore()` and saves the cart to `localStorage`.
`Provider` is set up in `src/main.jsx`.

Note: `decreaseQuantity` removes the item when its quantity would drop below 1.

## Checklist

- [x] Total item count in navbar
- [x] Cart total price (navbar + cart page)
- [x] Empty cart message
- [x] Active NavLink highlight
- [x] 404 page
- [x] Confirmation toast after adding an item
- [x] Bonus 1: search and category filter
- [x] Bonus 2: persistent cart (localStorage)
- [x] Bonus 3: checkout page + order summary via `useNavigate()`
