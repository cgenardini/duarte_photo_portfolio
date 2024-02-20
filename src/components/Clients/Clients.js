import "./Clients.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section className="clients" id="clients">
      <div className="clients__clients">
        <h2
          className="clients__clients-title"
          data-aos="fade-down"
          data-aos-duration="1800"
        >
          Clients
        </h2>
      </div>
      <div className="clients__featured">
        <h2
          className="clients__featured-title"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          Publications
        </h2>
      </div>
    </section>
  );
}

export default Clients;
