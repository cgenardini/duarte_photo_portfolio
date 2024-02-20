import "./ImageCollage.css";
import slide1 from "../../images/slides/slide1.webp";
import slide3 from "../../images/slides/slide3.jpg";
import slide6 from "../../images/slides/slide6.webp";
import slide4 from "../../images/slides/slide4.webp";
import slide8 from "../../images/slides/slide8.webp";
import slide9 from "../../images/slides/slide9.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ImageCollage() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="image-collage">
      <img
        src={slide1}
        className="image-collage__slide slide1"
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1800"
      ></img>
      <img
        src={slide3}
        className="image-collage__slide slide2"
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1800"
      ></img>
      <img
        src={slide6}
        className="image-collage__slide slide4"
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1800"
      ></img>
      <img
        src={slide4}
        className="image-collage__slide slide5"
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1800"
      ></img>
      <img
        src={slide8}
        className="image-collage__slide slide6"
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1800"
      ></img>
      <img
        src={slide9}
        className="image-collage__slide slide7"
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1800"
      ></img>
    </div>
  );
}

export default ImageCollage;
