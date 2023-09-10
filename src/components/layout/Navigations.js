import classes from "./Navigations.module.css";

const Navigations = () => {
  return (
    <ul className={classes.nav}>
      <li>
        <a href="/home/#home">Home</a>
      </li>
      <li>
        <a href="/home/#features">Features</a>
      </li>
      <li>
        <a href="/home/#specialists">Specialists</a>
      </li>
      <li>
        <a href="/home/#howitworks">How it Works</a>
      </li>
      <li>
        <a href="/home/#doctors">Doctors</a>
      </li>
      <li>
        <a href="/home/#about">About Us</a>
      </li>
      <li>
        <a href="/home/#contact">Contact Us</a>
      </li>
    </ul>
  );
};

export default Navigations;
