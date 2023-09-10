import Title from "../UI/Title";
import classes from "./About.module.css";
import TextItem from "./TextItem";
import aboutImage from "../../assets/hero.png";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <Title>About Us</Title>
      <p style={{ margin: "10px", color: "#777", textAlign: "center" }}>
        Who is HakeemQ.
      </p>
      <div className={`container ${classes.content}`}>
        <TextItem />
        <div data-aos="zoom-in-down" data-aos-duration="500" className={classes.image}>
          <img src={aboutImage} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
