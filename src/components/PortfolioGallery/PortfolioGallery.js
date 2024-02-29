import "./PortfolioGallery.css";

// import Masonry from "react-masonry-css";
import { slides } from "../../utils/constants";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import React from "react";

function PortforlioGallery({ imagePopupOpen, setImagePopupOpen }) {
  const [currentImage, setCurrentImage] = React.useState("");

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setImagePopupOpen(true);
  };

  const handleCloseImagePopup = () => {
    setImagePopupOpen(false);
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="gallery">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter="50px">
          {slides.map((slide, index) => {
            if (slide.type === "image") {
              return (
                <div className="gallery__container">
                  <img
                    key={index}
                    src={slide.src}
                    className="gallery__item"
                    alt={`gallery image ${index}`}
                    //   data-aos="fade-up"
                    //   data-aos-duration="1800"
                    onClick={() => handleImageClick(slide)}
                  />
                </div>
              );
            } else if (slide.type === "video") {
              return (
                <div className="gallery__container">
                  <video
                    key={index}
                    className="gallery__item"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => handleImageClick(slide)}
                    //   data-aos="fade-up"
                    //   data-aos-duration="1500"
                  >
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            }
          })}
        </Masonry>
      </ResponsiveMasonry>
      {imagePopupOpen && (
        <ImagePopup
          img={currentImage}
          handleCloseImagePopup={handleCloseImagePopup}
        />
      )}
    </div>
  );
}

export default PortforlioGallery;
