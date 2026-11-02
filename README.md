<<<<<<< HEAD
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
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 2f08e607ad345187c6724f1cd4541905e0d2b00e
