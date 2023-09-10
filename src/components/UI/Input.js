import classes from "./Input.module.css";

const Input = (props) => {
  let element;

  const inputClasses = props.hasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  switch (props.elementType) {
    case "input":
      element = (
        <div className={inputClasses}>
          <label style={{ textTransform: "capitalize" }} htmlFor={props.id}>
            {props.id}
          </label>
          <input id={props.id} {...props.config} />
          {props.hasError && (
            <p className={classes["error-text"]}>{props.errorMsg}</p>
          )}
        </div>
      );
      break;
    case "textarea":
      element = (
        <div className={inputClasses}>
          <label style={{ textTransform: "capitalize" }} htmlFor={props.id}>
            {props.id}
          </label>
          <textarea id={props.id} {...props.config}></textarea>
          {props.hasError && (
            <p className={classes["error-text"]}>{props.errorMsg}</p>
          )}
        </div>
      );
      break;
    case "select":
      element = (
        <div className={inputClasses}>
          <label style={{ textTransform: "capitalize" }} htmlFor={props.id}>
            {props.id}
          </label>
          <select {...props.config}>
            {props.options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    default:
      element = (
        <div className={inputClasses}>
          <label style={{ textTransform: "capitalize" }} htmlFor={props.id}>
            {props.id}
          </label>
          <input id={props.id} {...props.config} />
          {props.hasError && (
            <p className={classes["error-text"]}>{props.errorMsg}</p>
          )}
        </div>
      );
  }
  return element;
};

export default Input;
