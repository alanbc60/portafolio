import type { ImageSource } from "@app-types/typesPortfolio";
import "@styles/imageFrame.css";

interface ImageFrameProps {
  image: ImageSource;
  /** Proporción CSS, p. ej. "4 / 3". Si se omite, llena el alto del contenedor. */
  aspectRatio?: string;
  className?: string;
}

export function ImageFrame({ image, aspectRatio, className = "" }: ImageFrameProps) {
  return (
    <figure
      className={`image-frame halftone ${className}`.trim()}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {image.src ? (
        <img src={image.src} alt={image.alt} loading="lazy" />
      ) : (
        <div className="image-frame__placeholder" role="img" aria-label={image.alt}>
          {image.placeholder}
        </div>
      )}
    </figure>
  );
}
