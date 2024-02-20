import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Connect.css";

function Connect() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section className="connect">
      <h2
        data-aos="fade-up"
        data-aos-duration="1800"
        className="connect__header"
      >
        Bring Your Vision to Life
      </h2>
      <button
        type="button"
        data-aos="fade-up"
        data-aos-duration="1800"
        className="connect__button"
      >
        Connect
      </button>
      <div className="connect__overlay"></div>
    </section>
  );
}

export default Connect;
