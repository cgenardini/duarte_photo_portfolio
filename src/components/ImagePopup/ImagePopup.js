import { useSyncExternalStore } from "react";
import "./ImagePopup.css";

function ImagePopup({ img, handleCloseImagePopup }) {
  const renderSource = (img) => {
    if (img.type === "image") {
      return (
        <img src={img.src} alt="gallery image" className="image-popup__image" />
      );
    } else {
      return (
        <video className="image-popup__image" autoPlay loop muted playsInline>
          <source src={img.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="image-popup popup">
      <div className="image-popup__container">
        <button
          className="image-popup__close-button"
          type="button"
          onClick={handleCloseImagePopup}
        ></button>
        {renderSource(img)}
      </div>
    </div>
  );
}

export default ImagePopup;
