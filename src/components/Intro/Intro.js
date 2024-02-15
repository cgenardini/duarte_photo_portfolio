import "./Intro.css";
import pic from "../../images/photographer.jpg";

function Intro() {
  return (
    <section className="intro">
      <img src={pic} alt="photographer intro pic" className="intro__image" />
      <div className="intro__container">
        <p className="intro__paragraph">
          In the world of photography, Alex Mercer stands out as a visionary,
          capturing the unseen beauty and fleeting moments that many overlook.
          His journey behind the lens is a testament to his deep passion for
          storytelling through imagery. Alex's portfolio is a rich tapestry of
          life's emotions, from the serene whispers of nature to the vibrant
          beats of urban life. Each shot is meticulously crafted, inviting
          viewers into a realm where each frame narrates its own unique tale,
          echoing Alex's belief that photography is the art of seeing the
          extraordinary in the ordinary.
        </p>
        <button type="button" className="intro__button">
          Learn More
        </button>
      </div>
      <div className="intro__overlay"></div>
    </section>
  );
}

export default Intro;
