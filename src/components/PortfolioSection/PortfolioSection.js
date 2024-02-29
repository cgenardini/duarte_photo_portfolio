import "./PortfolioSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { TopPageContext } from "../../context/TopPageContext";

function PortfolioSection({ portName, title }) {
  const { handleTopPage } = React.useContext(TopPageContext);

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
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="port-section__button-container"
        onClick={handleTopPage}
      >
        <Link to={`/portfolio/${portName}`} className="port-section__link">
          <button type="button" className="port-section__button">
            View Gallery
          </button>
        </Link>
      </div>

      <div className="port-section__overlay"></div>
    </section>
  );
}

export default PortfolioSection;
