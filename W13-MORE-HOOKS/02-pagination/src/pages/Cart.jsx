import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import products from "../products";
import Product from "../components/Product";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {products.map((item, idx) => (
        <Product product={item} key={idx} />
      ))}
      <hr />
      {cart.map((item, idx) => (
        <CartItem key={idx} product={item} />
      ))}
    </div>
  );
}
