import React, { useEffect } from "react";
import "./Nav.css";
import logo from "../../images/triangle.svg";

function Nav({ onClickNavMenu, currentPage }) {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav nav__${currentPage} ${scrolled ? "nav_scroll" : ""}`}>
      <img src={logo} alt="logo" className="nav__logo" />
      <div className={`nav__name nav__name_${currentPage}`}>
        Joseph Nicolas Duarte
      </div>
      <button
        className="nav__menu"
        type="button"
        onClick={onClickNavMenu}
      ></button>
    </div>
  );
}

export default Nav;
