import classes from "./Contact.module.css";
import Title from "../UI/Title";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className={classes.contact}>
      <Title>Contact Us</Title>
      <p
        style={{
          textAlign: "center",
          color: "#777",
          marginTop: "10px",
          position: "relative",
        }}
      >
        Talk us about what you think.
      </p>
      <div className={`container ${classes.content}`}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
