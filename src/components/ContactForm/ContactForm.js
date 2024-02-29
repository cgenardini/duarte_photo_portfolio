import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="form__container">
        <h2 className="form__header">Say Hi.</h2>
        <form className="form__form">
          <fieldset className="form__fieldset">
            <label className="form__label">
              <h3 className="form__input-label">Name</h3>
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Name"
                minLength="2"
                maxLength="35"
                required
                aria-label="Name"
              />
            </label>
            <label className="form__label">
              <h3 className="form__input-label">Email</h3>
              <input
                className="form__input"
                type="email"
                placeholder="Email"
                minLength="1"
                required
                aria-label="Email"
              />
            </label>
            <label className="form__label">
              <h3 className="form__input-label">Subject</h3>
              <input
                className="form__input"
                type="text"
                name="subject"
                placeholder="What can I help you with?"
                minLength="2"
                maxLength="90"
                aria-label="Subject"
              />
            </label>
            <label className="form__label">
              <h3 className="form__input-label">Message</h3>
              <textarea
                className="form__input form__message"
                type="text"
                name="message"
                placeholder="... And what are the details?"
                minLength="100"
                maxLength="600"
                aria-label="Message"
              ></textarea>
            </label>
          </fieldset>
          <button type="submit" className="form__button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
