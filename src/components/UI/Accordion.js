import { useState } from "react";
import classes from "./Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordionHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Card className={`${classes.accordion} ${props.className}`}>
      <div
        className={
          isOpen ? `${classes.header} ${classes.open}` : classes.header
        }
        onClick={toggleAccordionHandler}
      >
        <h3>{props.title}</h3>
        <FontAwesomeIcon className={classes.icon} icon={faAngleDown} />
      </div>
      <div
        className={
          isOpen ? `${classes.content} ${classes.open}` : classes.content
        }
      >
        {props.content}
      </div>
    </Card>
  );
};

export default Accordion;
