import Connect from "../Connect/Connect";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import "./Portfolio.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PortfolioCategory from "../PortfolioCategory/PortfolioCategory";

function Portfolio({ imagePopupOpen, setImagePopupOpen }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [location.hash]);
  return (
    <div className="portfolio" id="portfolio">
      <Routes>
        <Route
          path=""
          element={
            <>
              <PortfolioSection portName="food" title="Food & Beverage" />
              <PortfolioSection
                portName="interiors"
                title="Interiors & Spaces"
              />
              <PortfolioSection portName="events" title="Events & Social" />
              <PortfolioSection portName="people" title="People & Life" />
              <PortfolioSection portName="brands" title="Brands & Products" />
              <PortfolioSection portName="places" title="Places & Stories" />
            </>
          }
        />

        <Route
          path="food"
          element={
            <PortfolioCategory
              title="Food & Beverage"
              imagePopupOpen={imagePopupOpen}
              setImagePopupOpen={setImagePopupOpen}
            />
          }
        />
        <Route
          path="interiors"
          element={
            <PortfolioCategory
              title="Interiors & Spaces"
              imagePopupOpen={imagePopupOpen}
              setImagePopupOpen={setImagePopupOpen}
            />
          }
        />
        <Route
          path="brands"
          element={
            <PortfolioCategory
              title="Brands & Products"
              imagePopupOpen={imagePopupOpen}
              setImagePopupOpen={setImagePopupOpen}
            />
          }
        />

        <Route
          path="events"
          element={
            <PortfolioCategory
              title="Events & Social"
              imagePopupOpen={imagePopupOpen}
              setImagePopupOpen={setImagePopupOpen}
            />
          }
        />

        <Route
          path="people"
          element={
            <PortfolioCategory
              title="People & Life"
              imagePopupOpen={imagePopupOpen}
              setImagePopupOpen={setImagePopupOpen}
            />
          }
        />
        <Route
          path="places"
          element={
            <PortfolioCategory
              title="Places & Stories"
              imagePopupOpen={imagePopupOpen}
              setImagePopupOpen={setImagePopupOpen}
            />
          }
        />
      </Routes>

      <Connect />
    </div>
  );
}

export default Portfolio;
