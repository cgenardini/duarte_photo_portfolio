import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Connect.css";
import { TopPageContext } from "../../context/TopPageContext";
import React from "react";
import { Link } from "react-router-dom";

function Connect() {
  const { handleTopPage } = React.useContext(TopPageContext);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="connect">
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        className="connect__header"
      >
        Bring Your Vision to Life
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="connect__button-container"
        onClick={handleTopPage}
      >
        <Link to="/contact" className="connect__link">
          <button type="button" className="connect__button">
            Connect
          </button>
        </Link>
      </div>

      <div className="connect__overlay"></div>
    </section>
  );
}

export default Connect;
