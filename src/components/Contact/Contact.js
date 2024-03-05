import Insta from "../Insta/Insta";
import "./Contact.css";
import ContactForm from "../ContactForm/ContactForm";
import Work from "../Work/Work";

function Contact({}) {
  return (
    <div className="contact">
      <section className="contact__header">
        <h1 className="contact__title">Hello.</h1>
        <div className="contact__header-overlay"></div>
      </section>
      <Insta />
      <ContactForm />
      <Work />
    </div>
  );
}

export default Contact;
