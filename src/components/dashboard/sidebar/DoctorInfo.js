import classes from "./DoctorInfo.module.css";
import DoctorImg from "../../../assets/doctor-icon.png";

const DoctorInfo = (props) => {
  const drName = localStorage.getItem("name");
  const spz = localStorage.getItem("spz");

  return (
    <div className={classes.info}>
      <div className={classes.image}>
        <img src={DoctorImg} alt="doctor" />
      </div>
      <h4 className={classes.name}>Dr.{drName}Omar Hasan</h4>
      <p className={classes.spz}>{spz}</p>
    </div>
  );
};

export default DoctorInfo;
