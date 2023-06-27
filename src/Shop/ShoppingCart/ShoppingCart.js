import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";
import { ItemList } from "../item/ItemList";

export const ShoppingCart = () => {
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
   
  );
  

  return (
    <div className="cart-container">
      <div>
        <div>🛒: {cart.length}</div>
        <div>Quantity : {quantity}</div>
        
        <div>Total: ${totalPrice}</div>
        
       <ItemList></ItemList>
        <button onClick={() => console.log(cart)}>Checkout</button>
        
      </div>
    </div>
  );
};
