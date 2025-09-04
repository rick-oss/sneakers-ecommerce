import { useState, useEffect } from "react";
import type { CartProduct } from "../../context/cartProduct";

import { FaTrashCan } from "react-icons/fa6";

import styles from "./CartDropDown.module.css";

interface CartDropDownProps {
  isOpen: boolean;
  cartItems: CartProduct[];
  onRemove: (id: number) => void;
}

function CartDropDown({ isOpen, cartItems, onRemove }: CartDropDownProps) {
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
      <div className={styles.cart_dropdown_content}>
        <p className={styles.cart_title}>Cart</p>
        <ul className={styles.cart_items}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item.id}>
                <article className={styles.item}>
                  <div>
                    <img src={item.image} alt="Imagem do Item" />
                    <span className={styles.item_details}>
                      {item.productName}
                      <p>
                        ${item.productPrice.toFixed(2)} x {item.productQuantity}
                        <strong>${item.totalPrice.toFixed(2)}</strong>
                      </p>
                    </span>
                  </div>
                  <button onClick={() => onRemove(item.id)}>
                    <FaTrashCan />
                  </button>
                </article>
              </li>
            ))
          ) : (
            <li className={styles.empty_cart}>Your cart is empty.</li>
          )}
        </ul>
        {cartItems.length > 0 && <button className={styles.checkout_button}>Checkout</button>}
      </div>
    </div>
  );
}

export default CartDropDown;
