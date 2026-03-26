import "./App.css";
import { fetchImagesByName } from "./Components/Loader";
import { SearchBar } from "./Components/Searchbar";
import { useEffect, useState } from "react";
import { ImageGallery } from "./Components/ImageGallery";

function App() {
  const [value, setValue] = useState("");
  const [image, setImage] = useState([]);

  useEffect(() => {
      fetchImagesByName(value)
        .then((images) => {
          console.log(images)
          setImage(images.hits);

        })
        .catch((error) => {
          console.log("Error:", error);
        });
        console.log(image)
  }, [value]);

  const ChangeName = (newName) => {
    setValue(newName);
  };

  return (
    <>
      <SearchBar onSubmit={ChangeName} />
      <ImageGallery image={image} />
    </>
  );
}
export default App;
