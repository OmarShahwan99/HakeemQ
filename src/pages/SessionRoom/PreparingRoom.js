import { useState } from "react";
import classes from "./preparing.module.css";

import { useNavigate } from "react-router";

const PreparingRoom = () => {
  const [url, setUrl] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const changeUrlHandler = (event) => {
    setUrl(event.target.value);
  };

  const changeTokenHandler = (event) => {
    setToken(event.target.value);
  };

  const connectHandler = (event) => {
    event.preventDefault();
    console.log(token);
    console.log(url);
    navigate({
      pathname: `/room/session`,
      search: `?token=${token}&?url=${url}`,
    });
  };

  return (
    <div className={`container ${classes.content}`}>
      <div className={classes.header}>
        <h1>HakeemQ</h1>
      </div>
      <form onSubmit={connectHandler}>
        <div className={classes["input-form"]}>
          <div className={classes.control}>
            <label htmlFor="url">URL</label>
            <input onChange={changeUrlHandler} type="url" name="url" id="url" />
          </div>
          <div className={classes.control}>
            <label htmlFor="token">Token</label>
            <input
              onChange={changeTokenHandler}
              type="text"
              name="token"
              id="token"
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button>Connect</button>
        </div>
      </form>
    </div>
  );
};

export default PreparingRoom;
