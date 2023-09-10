import Logo from "../logo/Logo";
import classes from "./AltHeader.module.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";

import { Button, Dropdown } from "antd";

const AltHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const authCtx = useContext(AuthContext);

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
      className={`${classes["header-alt"]} ${
        isScrolled ? classes["fixed-header"] : ""
      }`}
    >
      <div className={`container ${classes.content}`}>
        <Logo />
        {!authCtx.isAuth && (
          <div className={classes.reg}>
            <Link className={classes["button--alt"]} to="/login">
              Login
            </Link>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Button style={{ backgroundColor: "blue" }} type="primary">
                Register
              </Button>
            </Dropdown>
          </div>
        )}
      </div>
    </header>
  );
};

export default AltHeader;
