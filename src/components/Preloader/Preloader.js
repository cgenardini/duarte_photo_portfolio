import React, { useEffect } from "react";
import { useState } from "react";
import "./Preloader.css";
import { slides, video } from "../../utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";

function Preloader({ onClick }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => {
        return prev === video.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="preloader">
      {video.map((vid, index) => (
        <video
          key={index}
          autoPlay
          muted
          loop
          alt="Beautiful slide image"
          className={`preloader__image ${
            currentSlide === index ? "preloader__image_active" : ""
          }`}
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support this video tag.
        </video>
      ))}
      <div className="preloader__header-container">
        <button
          className="preloader__logo"
          onClick={onClick}
          data-aos="fade-up"
          data-aos-duration="3000"
        ></button>
        <h1
          className="preloader__header"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Joseph Duarte
        </h1>
      </div>
    </div>
  );
}

export default Preloader;
