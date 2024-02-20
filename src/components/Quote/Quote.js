import "./Quote.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Quote() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section className="quote">
      <h2 className="quote__quote" data-aos="fade-up" data-aos-duration="1800">
        "Photography is the story I fail to put into words."{" "}
      </h2>
      <h3 className="quote__author" data-aos="fade-up" data-aos-duration="1800">
        - Destin Sparks
      </h3>
      <div className="quote__overlay"></div>
    </section>
  );
}

export default Quote;
