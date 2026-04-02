import React, { useContext } from "react";
import { ImagesContext } from "../App";

export const ImageGalleryItem = () => {
  const images = useContext(ImagesContext);

  if (!images) return null;

  return (
    <>
      {images.map((img) => (
        <li className="gallery-item" key={img.id}>
          <img src={img.webformatURL} alt={img.tags} />
        </li>
      ))}
    </>
  );
};
