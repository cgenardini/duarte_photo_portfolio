import "./Work.css";
import { images } from "../../utils/constants";
import { TopPageContext } from "../../context/TopPageContext";
import React from "react";
import { Link } from "react-router-dom";

function Work() {
  const { handleTopPage } = React.useContext(TopPageContext);

  return (
    <section className="work">
      <div className="work__gallery-container">
        <ul className="work__gallery">
          {images.map((slide, index) => (
            <li key={index} className="work__image-card">
              <img src={slide} alt={`Slide ${index}`} className="work__image" />
            </li>
          ))}
        </ul>
        <h2 className="work__header">Expore My World</h2>
        <div onClick={handleTopPage} className="work__button-container">
          <Link to="/portfolio" className="work__link">
            <button className="work__button" type="button">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Work;
