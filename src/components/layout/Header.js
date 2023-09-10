import { useState, useEffect, useContext } from "react";
import classes from "./Header.module.css";
import Navigations from "./Navigations";
import Bar from "./NavigationsBar/Bar";
import MenuBar from "./NavigationsBar/MenuBar";

import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

import AuthContext from "../../store/auth-context";

import { Dropdown, Button } from "antd";

const Header = () => {
  const [barIsClicked, setBarIsClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const authCtx = useContext(AuthContext);

  const toggleMenuBarHandler = () => {
    setBarIsClicked((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 64) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const items = [
    {
      key: "1",
      label: <Link to="/doctor-register">As a doctor</Link>,
    },
    {
      key: "2",
      label: <Link to="/user-register">As a user</Link>,
    },
  ];

  return (
    <header
      className={`${classes.header} ${
        isScrolled ? classes["fixed-header"] : ""
      }`}
    >
      <div className={`container ${classes.content}`}>
        <div className={classes["right-item"]}>
          <Logo />
          <Navigations />
        </div>
        {!authCtx.isAuth && (
          <div className={classes.reg}>
            <Link to="/login" className={classes["button--alt"]}>
              Login
            </Link>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Button style={{ backgroundColor: "blue" }} type="primary">
                Register
              </Button>
            </Dropdown>
          </div>
        )}
        {/* {authCtx.isAuth && (
          <Link className={classes.button} to="/dashboard">
            Your dashboard
          </Link>
        )} */}
        <Bar onClick={toggleMenuBarHandler} />
      </div>
      <MenuBar isClicked={barIsClicked} />
    </header>
  );
};

export default Header;
