import { useState } from "react";

import styles from "./DesktopGallery.module.css";

interface galleryItems {
  image: string;
  thumbnail: string;
}

interface DesktopProductGalleryProps {
  gallery: galleryItems[];
}

function DesktopProductGallery({ gallery }: DesktopProductGalleryProps) {
  const [mainImage, setMainImage] = useState(gallery[0].image);

  return (
    <section className={styles.desktop_gallery}>
      <img src={mainImage} alt="" className={styles.main_image} />
      <ul className={styles.thumbnail_images}>
        {gallery.map((item, index) => (
          <li key={index}>
            <button onClick={() => setMainImage(item.image)}>
              <img src={item.thumbnail} alt={`Ver produto angulo ${index}`} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DesktopProductGallery;
