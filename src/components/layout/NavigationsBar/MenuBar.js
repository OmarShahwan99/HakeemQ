import classes from "./MenuBar.module.css";

import { Link } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

const MenuBar = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div
        className={`${classes["menu-bar"]} ${
          props.isClicked ? classes.clicked : ""
        }`}
      >
        <ul className={classes.nav}>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#features">Features</a>
          </li>
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <a href="/#doctors">Doctors</a>
          </li>
          {!authCtx.isAuth && (
            <div className={classes.reg}>
              <Link className={classes["button--alt"]} to="/login">
                Login
              </Link>
              <Link className={classes.button} to="/register">
                Register
              </Link>
            </div>
          )}
          {/* {authCtx.isAuth && (
            <Link className={classes.button} to="/dashboard">
              Your dashboard
            </Link>
          )} */}
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
