import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <h1 className={classes.logo}>
      <Link to="/home">HakeemQ</Link>
    </h1>
  );
};

export default Logo;
