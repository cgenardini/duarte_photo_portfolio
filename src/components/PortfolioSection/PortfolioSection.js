import "./PortfolioSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PortfolioSection({ portName, title }) {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section className={`port-section port-section_${portName}`}>
      <h2
        className="port-section__header"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        {title}
      </h2>
      <Link to={`/portfolio/${portName}`} className="port-section__link">
        <button
          type="button"
          data-aos="fade-up"
          data-aos-duration="1800"
          className="port-section__button"
        >
          View Gallery
        </button>
      </Link>

      <div className="port-section__overlay"></div>
    </section>
  );
}

export default PortfolioSection;
