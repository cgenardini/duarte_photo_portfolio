import "./ContactForm.css";
import React from "react";
import { sendEmail } from "../../utils/emailAPI";

function ContactForm({}) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendEmail = ({ name, email, subject, message }) => {
    sendEmail({ name, email, subject, message })
      .then((res) => {
        if (res) {
          setValues({ name: "", email: "", subject: "", message: "" });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendEmail(values);
    console.log(values);
  };

  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
                value={values.name}
                onChange={handleChangeValues}
              />
            </label>
            <label className="form__label">
              <h3 className="form__input-label">Email</h3>
              <input
                className="form__input"
                name="email"
                type="email"
                placeholder="Email"
                minLength="1"
                required
                aria-label="Email"
                value={values.email}
                onChange={handleChangeValues}
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
                value={values.subject}
                onChange={handleChangeValues}
              />
            </label>
            <label className="form__label">
              <h3 className="form__input-label">Message</h3>
              <textarea
                className="form__input form__message"
                type="text"
                name="message"
                placeholder="... And what are the details?"
                minLength="2"
                maxLength="600"
                aria-label="Message"
                value={values.message}
                onChange={handleChangeValues}
              ></textarea>
            </label>
          </fieldset>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
