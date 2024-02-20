import "./NavPopup.css";
import { Link } from "react-router-dom";

function NavPopup({ onClickClose }) {
  return (
    <div className="nav-popup">
      <div className="nav-popup__container">
        <button
          type="button"
          className="nav-popup__close-button"
          onClick={onClickClose}
        ></button>
        <ul className="nav-popup__list">
          <li className="nav-popup__list-item" onClick={onClickClose}>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav-popup__list-item" onClick={onClickClose}>
            <Link to="/info#about" className="nav__link">
              {" "}
              About{" "}
            </Link>
          </li>

          <li className="nav-popup__list-item" onClick={onClickClose}>
            <Link to="/info#clients" className="nav__link">
              Clients
            </Link>
          </li>

          <li className="nav-popup__list-item" onClick={onClickClose}>
            <Link to="/portfolio/" className="nav__link">
              {" "}
              Portfolio
            </Link>
          </li>

          <li className="nav-popup__list-item">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavPopup;
