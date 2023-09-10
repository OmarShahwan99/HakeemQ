import classes from "./MenuList.module.css";
import {
  faCalendarCheck,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import ApiContext from "../../../store/api-context";

const MenuList = (props) => {
  const sendRequest = useContext(ApiContext).sendRequest;
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const data = await sendRequest({
      url: "/logout",
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(data);
    authCtx.logout();
    navigate("/");
  };

  return (
    <ul className={classes["menu-list"]}>
      <div>
        <li className={classes["menu-item"]}>
          <NavLink
            to="appoitments"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <FontAwesomeIcon className={classes.icon} icon={faCalendarCheck} />
            <span>Appointments</span>
          </NavLink>
        </li>
        <li className={classes["menu-item"]}>
          <NavLink
            to="profile"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <FontAwesomeIcon className={classes.icon} icon={faUser} />
            <span>Profile</span>
          </NavLink>
        </li>
      </div>
      <li className={classes["menu-item"]}>
        <NavLink onClick={logoutHandler}>
          <FontAwesomeIcon className={classes.icon} icon={faRightFromBracket} />
          <span>Logout</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
