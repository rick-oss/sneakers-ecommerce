import { useState } from "react";

import styles from "./GridGallery.module.css";

import Lightbox from "./Lightbox";
import Thumbnails from "./Thumbnails";

interface galleryItems {
  image: string;
  thumbnail: string;
}

type GridGalleryProps = {
  gallery: galleryItems[];
  currentImageIndex?: number;
  onChangeIndex?: (index: number) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

function GridGallery({ gallery, currentImageIndex, onChangeIndex, onPrev, onNext }: GridGalleryProps) {
  const [mainImage, setMainImage] = useState(gallery[0].image);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Abre o lightbox
  const handleOpenLightbox = () => {
    setIsLightboxOpen(true);
  };

  // Fecha o lightbox
  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section className={styles.grid_gallery}>
      <img src={mainImage} alt="" className={styles.main_image} onClick={handleOpenLightbox} />
      <Thumbnails gallery={gallery} onSelect={setMainImage} />
      {isLightboxOpen && (
        <Lightbox
          lightboxImages={gallery}
          currentIndex={currentImageIndex}
          onChangeIndex={onChangeIndex}
          onClose={handleCloseLightbox}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
}

export default GridGallery;
