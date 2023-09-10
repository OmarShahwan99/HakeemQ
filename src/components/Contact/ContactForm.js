import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={classes["contact-form"]}>
      <div>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
      </div>
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message"></textarea>
      <div className={classes.action}>
        <button>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
