import { useState } from "react";

import styles from "./Thumbnails.module.css";

interface galleryItems {
  image: string;
  thumbnail: string;
}

type thumbnailsProps = {
  gallery: galleryItems[];
  currentImageIndex?: number;
  onSelect?: (image: string) => void;
  onChangeIndex?: (index: number) => void;
  mode?: "default" | "lightbox";
};

function Thumbnails({ gallery, currentImageIndex, onSelect, onChangeIndex, mode = "default" }: thumbnailsProps) {
  const [activeThumbnail, setActiveThumbnail] = useState(gallery[0].thumbnail);

  return (
    <ul className={`${styles.thumbnail_images} ${mode === "lightbox" ? styles.lightbox_mode : ""}`}>
      {gallery.map((item, index) => (
        <li key={index}>
          <button
            className={`${styles.thumbnail_button} ${
              (activeThumbnail === item.thumbnail && mode === "default") ||
              (currentImageIndex === index && mode === "lightbox")
                ? styles.active_thumbnail
                : ""
            }`}
            onClick={() => {
              if (onSelect) onSelect(item.image);
              if (onChangeIndex) onChangeIndex(index);
              setActiveThumbnail(item.thumbnail);
            }}
          >
            <img src={item.thumbnail} alt={`Ver produto angulo ${index}`} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Thumbnails;
