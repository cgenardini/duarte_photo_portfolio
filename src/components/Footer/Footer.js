import "./Footer.css";
import linkedin from "../../images/social/linkedin.svg";
import ig from "../../images/social/github.svg";
import gmail from "../../images/social/gmail.svg";
import logo from "../../images/triangle-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__socials">
        <li className="footer__icon">
          <img src={ig} alt="ig social icon" className="footer__ig" />
        </li>
        <li className="footer__icon">
          <img
            src={linkedin}
            alt="linkedin social icon"
            className="footer__linkedin"
          />
        </li>
        <li className="footer__icon">
          <img src={gmail} alt="email social icon" className="footer__email" />
        </li>
      </ul>

      <div className="footer__logo-container">
        <img className="footer__logo" alt="logo" src={logo} />
        <div className="footer__copywrite">
          © 2024 // Web Design by Genardini
        </div>
      </div>

      <ul className="footer__nav">
        <li className="footer__home">Home</li>
        <li className="footer__about">About</li>
        <li className="footer__clients">Clients</li>
        <li className="footer__portfolio">Portfolio</li>
        <li className="footer__contact">Contact</li>
      </ul>
    </footer>
  );
}

export default Footer;
