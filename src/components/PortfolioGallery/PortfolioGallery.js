import "./PortfolioGallery.css";

// import Masonry from "react-masonry-css";
import { slides } from "../../utils/constants";
import ResponsiveMasonry from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function PortforlioGallery() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="gallery">
      <ResponsiveMasonry
        columnsCount={1}
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="10px">
          {slides.map((slide, index) => {
            if (slide.type === "image") {
              return (
                <img
                  key={index}
                  src={slide.src}
                  className="gallery__item"
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="1800"
                />
              );
            } else if (slide.type === "video") {
              return (
                <video
                  key={index}
                  className="gallery__item"
                  autoPlay
                  loop
                  muted
                  playsInline
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            }
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default PortforlioGallery;
