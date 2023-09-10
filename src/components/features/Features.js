import classes from "./Features.module.css";
import icon1 from "../../assets/icon-05.png";
import icon2 from "../../assets/icon-03.png";
import icon3 from "../../assets/icon-04.png";
import icon4 from "../../assets/icon-02.png";
import FeatureItem from "./FeatureItem";
import Title from "../UI/Title";

const FEATURES = [
  {
    icon: icon1,
    title: "All Specialist",
    description:
      "We provide all medical specialist with doctors who have a lot of experience",
  },
  {
    icon: icon2,
    title: "Private & Secure",
    description:
      "All your data and your consultion is completely secure with end-to-end encrypted",
  },
  {
    icon: icon3,
    title: "Easy & Fast",
    description:
      "Our service is very easy to use, very fast withot any complex requirments",
  },
  {
    icon: icon4,
    title: "Available any time",
    description:
      "Get access to our doctors any time you want, feel free to choose any time you want",
  },
];

const Features = () => {
  return (
    <div id="features" className={classes.features}>
      <Title>Why you should trust us?</Title>
      <p style={{ textAlign: "center", marginTop: "10px", color: "#777" }}>
        Get know about us
      </p>
      <div className={`container ${classes.content}`}>
        {FEATURES.map((feature) => (
          <FeatureItem
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
