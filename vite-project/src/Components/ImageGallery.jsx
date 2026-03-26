import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = (image) => {
  return (
    <ul className="gallery">
      <li><ImageGalleryItem image={image}/></li>
    </ul>
  );
};