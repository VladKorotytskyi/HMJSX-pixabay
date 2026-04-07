import "./App.css";
import { fetchImagesByName } from "./Components/Loader";
import { SearchBar } from "./Components/Searchbar";
import { createContext, useEffect, useState } from "react";
import { ImageGallery } from "./Components/ImageGallery";
import { Modal } from "./Components/Modal/Modal";

export const ImagesContext = createContext(null);

function App() {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!value) return;
    fetchImagesByName(value)
      .then((data) => {
        setImages(data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [value]);

  const changeName = (newName) => {
    setValue(newName);
  };

  return (
    <>
      <SearchBar onSubmit={changeName} />
      <ImagesContext.Provider value={{ images, modal, setModal, selectedImage, setSelectedImage }}>
        <ImageGallery />
        <Modal />
      </ImagesContext.Provider>
    </>
  );
}

export default App;