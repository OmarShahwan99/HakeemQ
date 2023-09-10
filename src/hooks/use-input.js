import { useState } from "react";

const useInput = (validateValue) => {
  
  const [enteredValue, setEnteredValue] = useState("");
  
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);

  const hasError = !enteredValueIsValid && isTouched;

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    valueHasError: hasError,
    valueBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
