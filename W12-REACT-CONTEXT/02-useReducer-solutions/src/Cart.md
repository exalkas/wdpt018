### Shopping Cart Exercise with `useReducer` and Context API

**Objective** : Create a shopping cart application where users can view a list of products and add selected items to the cart using `useReducer` within the Context API.

#### Setup:

1. Create a new React application using `create-react-app` or `vite`.

#### Task Steps:

1. **Defining the Product List** :

- Create a file `products.js` and add to it this array:

  ```
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 4', price: 49.99 },
    { id: 5, name: 'Product 5', price: 59.99 },
  ];

  export default products;

  ```

2. **Creating Context and Reducer:**

- In a folder named `contexts`, create a file `CartContext.js`.
- Define an initial cart state and a `cartReducer` function that handles `ADD_ITEM`.
- Export the `CartContext` and a `CartProvider` component that uses the `useReducer` hook.

3. **Creating Product Component** :

- Create a component `Product.js` that takes a product object as a prop and renders the product details along with an "Add to Cart" button.
- Create a component `CartItem.js` that takes a product object as a prop and renders the product detail

4. **Creating Cart Component** :

- Create a component `Cart.js` that uses `useContext` to consume `CartContext`.
- Render a list of `Product` components based on the `products.js` array.
- Render `CartItem` components for each item in the cart state.

5. **Integrating Components** :

- In `App.js`, import `CartProvider` and `Cart`.
- Wrap your application with `CartProvider`.
- Include `Cart` inside `CartProvider`.
