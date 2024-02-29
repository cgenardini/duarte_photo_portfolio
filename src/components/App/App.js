import React from "react";
import { useState } from "react";
import { useContext } from "react";
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
import Contact from "../Contact/Contact";
import { TopPageContext } from "../../context/TopPageContext";

function App() {
  const location = useLocation();
  const [preloader, setPreloader] = React.useState(true);
  const [currentPopup, setCurrentPopup] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("");
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);

  const handleTopPage = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

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

  const handleClickOutsideClose = (e) => {
    if (e.target.classList.contains("popup")) {
      handleClosePopup(e);
      setImagePopupOpen(false);
    }
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup(e);
        setImagePopupOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

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
    <div className="app" onClick={handleClickOutsideClose}>
      <TopPageContext.Provider value={{ handleTopPage }}>
        {preloader && <Preloader onClick={handleClosePreloader} />}
        <Nav onClickNavMenu={handleOpenNavMenu} currentPage={currentPage} />
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route
            path="/portfolio/*"
            element={
              <Portfolio
                imagePopupOpen={imagePopupOpen}
                setImagePopupOpen={setImagePopupOpen}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main handleTopPage={handleTopPage} />
              </>
            }
          ></Route>
        </Routes>
        <Footer handleTopPage={handleTopPage} />
        {currentPopup === "nav" && (
          <NavPopup
            onClickClose={handleClosePopup}
            handleTopPage={handleTopPage}
          />
        )}
      </TopPageContext.Provider>
    </div>
  );
}

export default App;
