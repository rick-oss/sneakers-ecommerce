import { useState, useEffect } from "react";
import type { CartProduct } from "../../context/cartProduct";

import { FaTrashCan } from "react-icons/fa6";

import styles from "./CartDropDown.module.css";

interface CartDropDownProps {
  isOpen: boolean;
  cartItems: CartProduct[];
}

function CartDropDown({ isOpen, cartItems }: CartDropDownProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Muda a visibilidade apenas quando o componente é aberto
  // Isso faz com que a transição funcione corretamente
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.cart_dropdown} ${isVisible ? styles.show : ""}`}>
      <p>Cart</p>
      <ul>
        <li>Your cart is empty.</li>
      </ul>
    </div>
  );
}

export default CartDropDown;
