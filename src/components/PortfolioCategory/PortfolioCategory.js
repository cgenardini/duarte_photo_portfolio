import "./PortfolioCategory.css";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import PortforlioGallery from "../PortfolioGallery/PortfolioGallery";
import Connect from "../Connect/Connect";

function PortfolioCategory({ title }) {
  return (
    <div className="port-category">
      <section className="port-category__header">
        <h1 className="port-category__title">{title}</h1>
        <Link to="/portfolio" className="port-category__header-link">
          <button className="port-category__header-button">
            <img className="port-category__arrow" src={arrow} />
            Portfolio
          </button>
        </Link>
        <div className="port-category__overlay"></div>
      </section>
      <section className="port-category__container">
        <PortforlioGallery />
      </section>
    </div>
  );
}

export default PortfolioCategory;
