import classes from "./FeatureItem.module.css";

const FeatureItem = (props) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={classes.feature}
    >
      <img src={props.icon} alt="icon" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default FeatureItem;
