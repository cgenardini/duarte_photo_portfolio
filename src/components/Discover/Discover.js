import ImageCollage from "../ImageCollage/ImageCollage";
import "./Discover.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Discover() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="discover">
      <ImageCollage />
      {/* <div className="discover__overlay"></div> */}
      <h2
        className="discover__header"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        Through the Lens
      </h2>
      <button
        type="button"
        className="discover__button"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        Discover
      </button>
    </div>
  );
}

export default Discover;
