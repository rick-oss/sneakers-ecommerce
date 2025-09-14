import styles from "./CarouselGallery.module.css";

import GalleryArrows from "./GalleryArrows";

interface CarouselGalleryProps {
  images: string[];
  currentImageIndex?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

function CarouselGallery({ images, currentImageIndex = 0, onPrev, onNext }: CarouselGalleryProps) {
  return (
    <section className={styles.carousel_gallery}>
      <div className={styles.carousel_track} style={{ transform: `translateX(-${currentImageIndex * 25}%)` }}>
        {images.map((image, index) => (
          <img src={image} key={index} alt="Imagem do produto" className={styles.carousel_image} />
        ))}
      </div>
      <GalleryArrows onPrev={onPrev} onNext={onNext} variant="mobile" />
    </section>
  );
}

export default CarouselGallery;
