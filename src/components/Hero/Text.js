import classes from "./Text.module.css";

import aos from "aos";
import "aos/dist/aos.css";

import { Input } from "antd";

const { Search } = Input;

const Text = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className={classes.text}>
      <h1 data-aos="fade-right" data-aos-duration="2000">
        Follow-up Session <br /><span>medical platform</span>
      </h1>
      <p data-aos="fade-up" data-aos-duration="2000">
        Tals with a doctor using our highly secured and privacy, end-to-end
        encrypted video call, easy to use.
      </p>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: "80%",
        }}
        data-aos="fade-up"
        data-aos-duration="2000"
      />
    </div>
  );
};

export default Text;
