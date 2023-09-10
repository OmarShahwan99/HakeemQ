import { useRef } from "react";
import "./Bar.css";

const Bar = (props) => {
  const barRef = useRef();

  const clickBarHandler = () => {
    barRef.current.classList.toggle("clicked");
    props.onClick();
  };

  return (
    <div onClick={clickBarHandler} ref={barRef} className="bar">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Bar;
