import classes from "./AvailableTimes.module.css";

import { useState } from "react";

import { RotatingLines } from "react-loader-spinner";

const AvailableTimes = (props) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeHandler = (time) => {
    props.onChoose(time);
    setSelectedTime(time);
  };

  return (
    <>
      <h4>
        Available Times in <span>{props.date}:</span>
      </h4>
      <div className={classes["available-times"]}>
        {!props.times && !props.isLoading && (
          <p style={{ color: "red" }}>
            there is no available times in {props.date} please choose another
            date.
          </p>
        )}
        {props.isLoading && (
          <RotatingLines
            strokeColor="var(--primary)"
            strokeWidth="5"
            animationDuration="0.75"
            width="60"
            visible={true}
          />
        )}
        {props.times &&
          !props.isLoading &&
          props.times.map((time) => (
            <span
              onClick={() => timeHandler(time)}
              key={time}
              className={selectedTime === time ? classes.selected : ""}
            >
              {time}
            </span>
          ))}
      </div>
    </>
  );
};

export default AvailableTimes;
