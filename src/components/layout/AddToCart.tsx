import styles from "./AddToCart.module.css";

import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconCart from "../../assets/images/icon-cart.svg";

function AddToCart() {
  return (
    <section className={styles.add_to_cart}>
      <div className={styles.price_container}>
        <div className={styles.left_side}>
          <span className={styles.price}>$125.00</span>
          <span className={styles.discount}>50%</span>
        </div>
        <del className={styles.original_price}>$250.00</del>
      </div>
      <div className={styles.quantity_container}>
        <button className={styles.minus_button}>
          <img src={iconMinus} alt="Icone de diminuir número de produtos desejados" />
        </button>
        <span className={styles.quantity}>0</span>
        <button className={styles.plus_button}>
          <img src={iconPlus} alt="Icone de aumentar número de produtos desejados" />
        </button>
      </div>
      <button className={styles.add_button}>
        <img src={iconCart} alt="Icone de carrinho" />
        <p>Add to cart</p>
      </button>
    </section>
  );
}

export default AddToCart;
