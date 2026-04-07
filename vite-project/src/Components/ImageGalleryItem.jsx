import { useContext } from "react";
import { ImagesContext } from "../App";

export const ImageGalleryItem = () => {
  const { images, setModal, setSelectedImage } = useContext(ImagesContext);

  const handleClickModal = (image) => {
    setSelectedImage(image);
    setModal(true);
  };

  return (
    <>
      {images.map((image) => (
        <li className="gallery-item" key={image.id}>
          <img 
            src={image.webformatURL} 
            alt={image.tags} 
            onClick={() => handleClickModal(image)} 
          />
        </li>
      ))}
    </>
  );
};