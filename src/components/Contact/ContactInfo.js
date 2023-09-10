import classes from "./ContactInfo.module.css";
import {
  faLocation,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <ul className={classes["contact-info"]}>
      <li>
        <FontAwesomeIcon className={classes.icon} icon={faLocation} />
        <div>
          <h3>Location</h3>
          <p>Damascus, syria, Rukn Aldeen Faihaa Street</p>
        </div>
      </li>
      <li>
        <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
        <div>
          <h3>Email</h3>
          <p>info@gmail.com</p>
        </div>
      </li>
      <li>
        <FontAwesomeIcon className={classes.icon} icon={faPhone} />
        <div>
          <h3>Call</h3>
          <p>+963964384221</p>
        </div>
      </li>
    </ul>
  );
};

export default ContactInfo;
