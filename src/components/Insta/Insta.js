import "./Insta.css";
import img from "../../images/photographer.jpg";
import insta from "../../images/social/instagram-red.svg";

function Insta() {
  return (
    <section className="insta">
      <img src={img} alt="image of Joseph Durarte" className="insta__image" />
      <div className="insta__container">
        <div className="insta__title-container">
          <h2 className="insta__title">Moments with Joseph Durate</h2>
          <a
            href="https://www.instagram.com/joseph.nicolas.duarte/"
            target="_blank"
          >
            <img src={insta} alt="insta logo" className="insta__logo" />
          </a>
        </div>
        <p className="insta__paragraph">
          Dive into the visual diary of Joseph Durarte, where every snapshot
          tells a story. From the untamed beauty of nature to the candid moments
          of urban life, follow me on Instagram to explore the world through my
          lens. Let's connect and find beauty in the everyday together.
        </p>
      </div>
    </section>
  );
}

export default Insta;
