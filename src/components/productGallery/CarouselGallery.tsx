import styles from "./CarouselGallery.module.css";

import GalleryArrows from "./GalleryArrows";

interface galleryItems {
  image: string;
  thumbnail: string;
}

interface CarouselGalleryProps {
  gallery: galleryItems[];
  currentImageIndex?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

function CarouselGallery({ gallery, currentImageIndex = 0, onPrev, onNext }: CarouselGalleryProps) {
  return (
    <section className={styles.carousel_gallery}>
      <div className={styles.image_container} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {gallery.map((item, index) => (
          <img src={item.image} key={index} alt="Imagem do produto" />
        ))}
      </div>
      <GalleryArrows onPrev={onPrev} onNext={onNext} variant="mobile" />
    </section>
  );
}

export default CarouselGallery;
