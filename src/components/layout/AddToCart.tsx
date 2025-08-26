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
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="hsl(220, 13%, 13%)"
            fillRule="nonzero"
          />
        </svg>
        <p>Add to cart</p>
      </button>
    </section>
  );
}

export default AddToCart;
