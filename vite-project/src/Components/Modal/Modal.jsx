import { useContext } from "react";
import { ImagesContext } from "../../App";
import "./ModalStyle.css";

export const Modal = () => {
  const { modal, setModal, selectedImage } = useContext(ImagesContext);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  if (!modal || !selectedImage) return null;

  return (
    <div
      className={`modal-overlay ${modal ? "active" : ""}`}
      onClick={closeModal}
    >
      <div className="modal-window">
        <img
          src={selectedImage.largeImageURL || selectedImage.webformatURL}
          alt={selectedImage.tags}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
  );
};