import "./Footer.css";
import linkedin from "../../images/social/linkedin.svg";
import ig from "../../images/social/instagram.svg";
import gmail from "../../images/social/gmail.svg";
import logo from "../../images/triangle-white.svg";
import { Link } from "react-router-dom";
import React from "react";
import { TopPageContext } from "../../context/TopPageContext";

function Footer({}) {
  const { handleTopPage } = React.useContext(TopPageContext);

  return (
    <footer className="footer">
      <ul className="footer__socials">
        <li className="footer__icon">
          <a
            href="https://www.instagram.com/joseph.nicolas.duarte/"
            target="_blank"
          >
            <img src={ig} alt="ig social icon" className="footer__ig" />
          </a>
        </li>
        <li className="footer__icon">
          <a
            href="https://www.linkedin.com/in/joseph-duarte-02ab1513b/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin social icon"
              className="footer__linkedin"
            />
          </a>
        </li>
        <li className="footer__icon">
          <a href="mailto:josephnduarte1023@gmail.com" target="_blank">
            <img
              src={gmail}
              alt="email social icon"
              className="footer__email"
            />
          </a>
        </li>
      </ul>

      <div className="footer__logo-container">
        <Link to="/" className="footer__link">
          <img className="footer__logo" alt="logo" src={logo} />
        </Link>

        <div className="footer__copywrite">
          © 2024 // Web Design by Genardini
        </div>
      </div>

      <ul className="footer__nav">
        <li className="footer__home" onClick={handleTopPage}>
          <Link to="/" className="footer__link">
            Home
          </Link>
        </li>

        <li className="footer__about" onClick={handleTopPage}>
          <Link to="/info" className="footer__link">
            About
          </Link>
        </li>

        <li className="footer__clients" onClick={handleTopPage}>
          <Link to="/info#clients" className="footer__link">
            Clients
          </Link>
        </li>

        <li className="footer__portfolio" onClick={handleTopPage}>
          <Link to="/portfolio" className="footer__link">
            Portfolio
          </Link>
        </li>

        <li className="footer__contact" onClick={handleTopPage}>
          <Link to="/contact" className="footer__link">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
