import Accordion from "../UI/Accordion";
import classes from "./AvailableDates.module.css";

const AvailableDates = (props) => {
  const availableTimes = (
    <ul className={classes["times-list"]}>
      {props.times.map((date) => (
        <li key={date.day} className={classes.date}>
          <p>{date.day}:</p>
          <div>
            {date.houres.map((houre) => (
              <span key={houre}>{houre}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
  return <Accordion title="Available Times" content={availableTimes} />;
};

export default AvailableDates;
