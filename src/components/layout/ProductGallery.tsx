import styles from "./ProductGallery.module.css";

import iconNext from "../../assets/images/icon-next.svg";
import iconPrevious from "../../assets/images/icon-previous.svg";

interface ProductGalleryProps {
  images: string;
}

function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <section className={styles.product_gallery}>
      <button className={styles.button_previous}>
        <img src={iconPrevious} alt="" />
      </button>
      <img className={styles.product_image} src={images} alt="" />
      <button className={styles.button_next}>
        <img src={iconNext} alt="" />
      </button>
    </section>
  );
}

export default ProductGallery;
