import { useState, useEffect } from "react";
import type { CartProduct } from "../../context/cartProduct";

import styles from "./AddToCart.module.css";

import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import imageProduct1 from "../../assets/images/image-product-1.jpg";

interface AddToCartProps {
  onAdd: (product: CartProduct) => void;
}

function AddToCart({ onAdd }: AddToCartProps) {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(125);
  const [originalPrice, setOriginalPrice] = useState(250);

  const handleIncrease = () => {
    setQuantity((prev) => (prev < 99 ? prev + 1 : prev));
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev != 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    if (quantity > 0) {
      setPrice(125 * quantity);
      setOriginalPrice(250 * quantity);
    }
  }, [quantity]);

  return (
    <section className={styles.add_to_cart}>
      <div className={styles.price_container}>
        <div className={styles.left_side}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <span className={styles.discount}>50%</span>
        </div>
        <del className={styles.original_price}>${originalPrice.toFixed(2)}</del>
      </div>
      <div className={styles.quantity_container}>
        <button className={styles.minus_button} onClick={handleDecrease}>
          <img src={iconMinus} alt="Icone de diminuir número de produtos desejados" />
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.plus_button} onClick={handleIncrease}>
          <img src={iconPlus} alt="Icone de aumentar número de produtos desejados" />
        </button>
      </div>
      <button
        className={styles.add_button}
        onClick={() =>
          onAdd({
            id: 1,
            image: imageProduct1,
            productName: "Fall Limited Edition Sneakers",
            productPrice: 125,
            productQuantity: quantity,
            totalPrice: price,
          })
        }
      >
        <img src={iconCart} alt="Icone de carrinho" />
        <p>Add to cart</p>
      </button>
    </section>
  );
}

export default AddToCart;
