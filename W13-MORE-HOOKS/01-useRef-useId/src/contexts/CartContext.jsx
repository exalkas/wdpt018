import { createContext, useReducer } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const cartReducer = (currentState, action) => {
    switch (action.type) {
      case `ADD_ITEM`:
        return [...currentState, action.payload];

      default:
        return currentState;
    }
  };

  const [cart, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}
