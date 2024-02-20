import "./About.css";
import logo from "../../images/triangle.svg";
import img from "../../images/photographer.jpg";
import { paragraphs } from "../../utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section className="about" id="about">
      <div className="about__intro">
        <div className="about__intro-overlay"></div>
        {/* <img className="about__image" alt="image of Joseph" src={img} /> */}
        <div className="about__content">
          <h1
            className="about__name"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Joseph Nicolas Duarte
          </h1>
          <h2
            className="about__title"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Photographer | Explorer{" "}
          </h2>

          {paragraphs.map((par, index) => (
            <p
              className="about__paragraph"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {par}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
