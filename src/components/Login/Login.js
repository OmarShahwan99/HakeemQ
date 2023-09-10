import classes from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={classes.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
