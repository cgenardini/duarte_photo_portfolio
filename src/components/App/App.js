import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import NavPopup from "../NavPopup/NavPopup";
import Info from "../Info/Info";
import Portfolio from "../Portfolio/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();
  const [preloader, setPreloader] = React.useState(true);
  const [currentPopup, setCurrentPopup] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("");

  const handleCloseNav = (e) => {
    e.preventDefault();

    handleClosePopup(e);
  };

  const handleOpenNavMenu = (e) => {
    e.preventDefault();
    setCurrentPopup("nav");
  };

  const handleClosePopup = (e) => {
    e.preventDefault();
    setCurrentPopup("");
  };

  const handleClosePreloader = () => {
    setPreloader(false);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/info") {
      setCurrentPage("info");
    }
    if (currentPath === "/contact") {
      setCurrentPage("contact");
    }
    if (currentPath === "/portfolio/*") {
      setCurrentPage("portfolio");
    }
    if (currentPath === "/clients") {
      setCurrentPage("clients");
    }
    if (currentPath === "/") {
      setCurrentPage("");
    }
  }, [location.pathname]);

  return (
    <div className="app">
      {preloader && <Preloader onClick={handleClosePreloader} />}
      <Nav onClickNavMenu={handleOpenNavMenu} currentPage={currentPage} />
      <Routes>
        <Route path="/info" element={<Info />} />
        <Route path="/portfolio/*" element={<Portfolio />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
      {currentPopup === "nav" && <NavPopup onClickClose={handleClosePopup} />}
    </div>
  );
}

export default App;
