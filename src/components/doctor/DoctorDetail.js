import classes from "./DoctorDetail.module.css";
import profileImg from "../../assets/Doctor-icon.jpg";
import Card from "../UI/Card";
import Skeleton from "react-loading-skeleton";

const DoctorItem = (props) => {
  return (
    <Card className={classes["doctor-detail"]}>
      <div className={classes.image}>
        <img src={profileImg} alt="profile" />
      </div>
      <div className={classes.details}>
        {props.isLoading && <Skeleton />}
        {!props.isLoading && <h1>Dr. {props.name}</h1>}
        <p>
          Specialist:{" "}
          <span>
            {!props.isLoading && props.spz}
            {props.isLoading && <Skeleton />}
          </span>
        </p>
        <p>
          Email:{" "}
          <span>
            {!props.isLoading && props.email}
            {props.isLoading && <Skeleton />}
          </span>
        </p>
        <p>
          Phone:{" "}
          <span>
            {!props.isLoading && props.phone}
            {props.isLoading && <Skeleton />}
          </span>
        </p>
      </div>
    </Card>
  );
};

export default DoctorItem;
