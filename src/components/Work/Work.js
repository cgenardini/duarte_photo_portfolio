import "./Work.css";
import { images } from "../../utils/constants";

function Work() {
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
        <button className="work__button" type="button">
          Portfolio
        </button>
      </div>
    </section>
  );
}

export default Work;
