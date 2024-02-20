import "./Info.css";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Work from "../Work/Work";
import Connect from "../Connect/Connect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Info() {
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

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="info">
      <About />
      <Clients />
      <Work />
      <Connect />
    </div>
  );
}

export default Info;
