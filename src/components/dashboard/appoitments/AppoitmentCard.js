import { useRef, useState } from "react";
import classes from "./AppoitmentCard.module.css";
import Droplist from "./Droplist";
import { useEffect } from "react";

const AppoitmentCard = (props) => {
  const [droplistIsOpen, setDroplistIsOpen] = useState(false);
  const appCardRef = useRef();

  const toggleDroplistHandler = () => {
    setDroplistIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (appCardRef && !appCardRef.current.contains(event.target)) {
      setDroplistIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={appCardRef} className={classes["app-card"]}>
      <div className={classes.content}>
        <div>
          <h6>Patient Name</h6>
          <p>{props.name}</p>
        </div>
        <div>
          <h6>Age</h6>
          <p>{props.age}</p>
        </div>
        <div>
          <h6>Gender</h6>
          <p>{props.gender}</p>
        </div>
        <div>
          <h6>Appoitment Date</h6>
          <p>{props.appDate}</p>
        </div>
        <div>
          <h6>Appoitment Time</h6>
          <p>{props.appTime}</p>
        </div>
      </div>
      <div
        onClick={toggleDroplistHandler}
        className={
          droplistIsOpen
            ? `${classes["drop-btn"]} ${classes.active}`
            : classes["drop-btn"]
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {droplistIsOpen && <Droplist onDelete={props.onDelete} id={props.id} />}
    </div>
  );
};

export default AppoitmentCard;
