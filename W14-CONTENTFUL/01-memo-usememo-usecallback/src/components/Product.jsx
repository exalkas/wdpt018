import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Product({ product }) {
  const { cartDispatch } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button
        onClick={() => cartDispatch({ type: "ADD_ITEM", payload: product })}
      >
        Add to cart
      </button>
    </div>
  );
}
