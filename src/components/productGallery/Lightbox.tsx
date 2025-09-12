import ReactDom from "react-dom";
import { FaX } from "react-icons/fa6";

import styles from "./Lightbox.module.css";

import CarouselGallery from "./CarouselGallery";
import Thumbnails from "./Thumbnails";

interface lightboxImagesItems {
  image: string;
  thumbnail: string;
}

interface LightboxProps {
  lightboxImages: lightboxImagesItems[];
  currentIndex?: number;
  onChangeIndex?: (index: number) => void;
  onClose?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

function Lightbox({ lightboxImages, currentIndex, onChangeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return null;
  return ReactDom.createPortal(
    <section className={styles.lightbox}>
      <div className={styles.lightbox_content}>
        <div className={styles.close_lightbox}>
          <button onClick={onClose}>
            <FaX className={styles.icon_button} />
          </button>
        </div>
        <CarouselGallery gallery={lightboxImages} currentImageIndex={currentIndex} onPrev={onPrev} onNext={onNext} />
        <Thumbnails gallery={lightboxImages} currentImageIndex={currentIndex} onChangeIndex={onChangeIndex}  mode="lightbox" />
      </div>
    </section>,
    lightbox
  );
}

export default Lightbox;
