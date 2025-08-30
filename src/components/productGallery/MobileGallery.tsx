import { useState } from "react";

import styles from "./MobileGallery.module.css";

import iconNext from "../../assets/images/icon-next.svg";
import iconPrevious from "../../assets/images/icon-previous.svg";

interface MobileGalleryProps {
  images: string[];
}

function ProductGallery({ images }: MobileGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex != 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <section className={styles.product_gallery}>
      <button className={styles.button_previous} onClick={handlePrevious}>
        <img src={iconPrevious} alt="" />
      </button>
      <div className={styles.image_container} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img src={image} key={index} alt="Imagem do produto" />
        ))}
      </div>
      <button className={styles.button_next} onClick={handleNext}>
        <img src={iconNext} alt="" />
      </button>
    </section>
  );
}

export default ProductGallery;
