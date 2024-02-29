import ImageCollage from "../ImageCollage/ImageCollage";
import "./Discover.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Discover({ handleTopPage }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="discover">
      <ImageCollage />

      <h2
        className="discover__header"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Through the Lens
      </h2>
      <div data-aos="fade-up" data-aos-duration="1000" onClick={handleTopPage}>
        <Link to="/portfolio" className="discover__link">
          <button type="button" className="discover__button">
            Discover
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Discover;
