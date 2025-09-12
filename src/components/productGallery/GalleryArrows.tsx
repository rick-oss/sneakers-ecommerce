import styles from "./GalleryArrows.module.css";

import iconNext from "../../assets/images/icon-next.svg";
import iconPrevious from "../../assets/images/icon-previous.svg";

type GalleryArrowsProps = {
  onPrev?: () => void;
  onNext?: () => void;
  variant?: "mobile" | "lightbox";
};

const GalleryArrows = ({ onPrev, onNext, variant = "mobile" }: GalleryArrowsProps) => {
  return (
    <>
      <button className={`${styles.arrow} ${styles.left_arrow} ${styles[variant]}`} onClick={onPrev}>
        <img src={iconPrevious} alt="" />
      </button>
      <button className={`${styles.arrow} ${styles.right_arrow} ${styles[variant]}`} onClick={onNext}>
        <img src={iconNext} alt="" />
      </button>
    </>
  );
};

export default GalleryArrows;
