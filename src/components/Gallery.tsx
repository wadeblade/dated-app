import React, { useState, ChangeEvent } from "react";
import Header from "./Header";
import FileUploader from "./FileUploader";
import CustomLink from "./Link";
import "../index.css";

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newPhotos = files.map((file) => URL.createObjectURL(file));
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    }
  };

  const handleDelete = (index: number) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <div className="gallery-container">
        <h2 className="gallery-heading">Our Gallery</h2>
        <div className="choose-files-container">
          <FileUploader onUpload={handleUpload} />
        </div>
        <div className="gallery">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo} alt={`Фото ${index + 1}`} />
              <button onClick={() => handleDelete(index)}>Видалити</button>
            </div>
          ))}
        </div>
      </div>
      <CustomLink>Назад</CustomLink>
    </>
  );
};

export default Gallery;
