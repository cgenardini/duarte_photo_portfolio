import "./PortfolioCategory.css";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import PortforlioGallery from "../PortfolioGallery/PortfolioGallery";

function PortfolioCategory() {
  return (
    <div className="port-category">
      <section className="port-category__header">
        <Link to="/portfolio" className="port-category__header-link">
          <button className="port-category__header-button">
            <img className="port-category__arrow" src={arrow} />
            Back
          </button>
        </Link>
      </section>
      <section className="port-category__container">
        <PortforlioGallery />
      </section>
    </div>
  );
}

export default PortfolioCategory;
