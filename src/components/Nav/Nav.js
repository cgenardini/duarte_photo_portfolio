import React, { useEffect } from "react";
import "./Nav.css";
import logo from "../../images/triangle.svg";

function Nav() {
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
    <div className={`nav ${scrolled ? "nav_scroll" : ""}`}>
      <img src={logo} alt="logo" className="nav__logo" />
      <div className="nav__name">Joseph Nicolas Duarte</div>
      <button className="nav__menu"></button>
    </div>
  );
}

export default Nav;
