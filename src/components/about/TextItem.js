import classes from "./TextItem.module.css";
import {
  faThumbsUp,
  faUserShield,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../UI/Accordion";

const TextItem = () => {
  return (
    <div className={classes.text}>
      <div data-aos="slide-right" data-aos-duration="1000">
        <h1>
          We care <span>about your health</span>
        </h1>
        <p>
          HakeemQ is the first syrian platform for medical consluting, we
          provide a medical advice for free by video consluting
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className={classes["accordion-list"]}
      >
        <Accordion
          title="Our Target"
          content={
            <p>
              Our goal is to build a leap in digital transformation in the world
              of medicine and save patients time and effort
            </p>
          }
        />
        <Accordion
          title="Our Hopes"
          content={
            <p>
              To become our leading platform in its time in providing online
              medical consultations
            </p>
          }
        />
        <Accordion
          title="Our Message"
          content={
            <p>
              Making pioneering efforts and ideas to develop the capabilities of
              our country
            </p>
          }
        />
      </div>
      <ul data-aos="zoom-in" data-aos-duration="2500" className={classes.icons}>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faThumbsUp} />
          <span>High Quality</span>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faClock} />
          <span>24/24 hours</span>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faUserShield} />
          <span>100% Safe</span>
        </li>
      </ul>
    </div>
  );
};

export default TextItem;
