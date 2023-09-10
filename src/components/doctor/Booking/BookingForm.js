import classes from "./BookingForm.module.css";
import { useEffect, useState } from "react";

import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input";

import AvailableTimes from "./AvailableTimes";

const nameValidation = (value) => value.trim() !== "";
const emailValidation = (value) => value.includes("@");
const phoneValidation = (value) => value.length === 10;
const ageValidation = (value) => value > 18 && value < 100;

const startDate = new Date();
const endDate = new Date(startDate.getTime() + 1000 * 60 * 60 * 24 * 7);

const BookingForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    valueHasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(nameValidation);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    valueHasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidation);
  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    valueHasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(phoneValidation);
  const {
    value: enteredAge,
    isValid: ageIsValid,
    valueHasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    valueBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(ageValidation);
  const {
    value: enteredReason,
    isValid: reasonIsValid,
    valueHasError: reasonHasError,
    valueChangeHandler: reasonChangeHandler,
    valueBlurHandler: reasonBlurHandler,
    reset: resetReason,
  } = useInput(nameValidation);
  const {
    value: selectedGender,
    isValid: selectedGenderIsValid,
    valueChangeHandler: genderChangeHandler,
    reset: resetGender,
  } = useInput(nameValidation);
  const {
    value: selectedDate,
    isValid: selectedDateIsValid,
    valueChangeHandler: dateChangeHandler,
    reset: resetDate,
  } = useInput(nameValidation);

  let formIsValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    ageIsValid &&
    reasonIsValid &&
    selectedGenderIsValid &&
    selectedDateIsValid
  ) {
    formIsValid = true;
  }

  const [selectedTime, setSelectedTime] = useState(null);

  const chooseTimeHandler = (timeValue) => {
    setSelectedTime(timeValue);
  };

  const inputElements = [
    {
      elementType: "input",
      id: "name",
      hasError: nameHasError,
      errorMsg: "Please enter a valid name (non empty value).",
      config: {
        type: "text",
        name: "name",
        value: enteredName,
        onBlur: nameBlurHandler,
        onChange: nameChangeHandler,
      },
    },
    {
      elementType: "input",
      id: "email",
      hasError: emailHasError,
      errorMsg: "Please enter a valid email.",
      config: {
        type: "email",
        name: "email",
        value: enteredEmail,
        onBlur: emailBlurHandler,
        onChange: emailChangeHandler,
      },
    },
    {
      elementType: "input",
      id: "phone",
      hasError: phoneHasError,
      errorMsg: "Please enter a valid phone",
      config: {
        type: "tel",
        name: "phone",
        value: enteredPhone,
        onBlur: phoneBlurHandler,
        onChange: phoneChangeHandler,
      },
    },
    {
      elementType: "input",
      id: "age",
      hasError: ageHasError,
      errorMsg: "Please enter a valid age",
      config: {
        type: "number",
        name: "age",
        value: enteredAge,
        onBlur: ageBlurHandler,
        onChange: ageChangeHandler,
      },
    },
    {
      elementType: "textarea",
      id: "reason",
      hasError: reasonHasError,
      errorMsg: "Please enter a valid value",
      config: {
        type: "text",
        name: "reason",
        value: enteredReason,
        onBlur: reasonBlurHandler,
        onChange: reasonChangeHandler,
      },
    },
    {
      elementType: "select",
      id: "gender",
      config: {
        value: selectedGender,
        onChange: genderChangeHandler,
      },
      options: [
        { value: "", inner: "--please select your gender--" },
        { value: "Male", inner: "Male" },
        { value: "Female", inner: "Female" },
      ],
    },
    {
      elementType: "input",
      id: "date",
      config: {
        type: "date",
        name: "date",
        min: startDate.toISOString().split("T")[0],
        max: endDate.toISOString().split("T")[0],
        value: selectedDate,
        onChange: dateChangeHandler,
      },
    },
  ];

  const appoitmentHandler = async (event) => {
    event.preventDefault();

    const bookingData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      age: enteredAge,
      gender: selectedGender,
      description: enteredReason,
      appointment_date: selectedDate,
      appointment_time: selectedTime,
      doctor_id: props.id,
    };
    console.log(bookingData);

    props.onBook(bookingData);

    resetName();
    resetEmail();
    resetPhone();
    resetAge();
    resetReason();
    resetGender();
    resetDate();
  };

  const { onSelectDate } = props;

  useEffect(() => {
    onSelectDate(selectedDate);
  }, [selectedDate, onSelectDate]);

  return (
    <form onSubmit={appoitmentHandler}>
      <div className={classes["input-form"]}>
        {inputElements.map((el) => (
          <Input
            key={el.id}
            id={el.id}
            elementType={el.elementType}
            config={el.config}
            options={el.options}
            hasError={el.hasError}
            errorMsg={el.errorMsg}
          />
        ))}
        <div className={classes.control}>
          <AvailableTimes
            onChoose={chooseTimeHandler}
            times={props.times}
            date={selectedDate}
            isLoading={props.isLoading}
          />
        </div>
      </div>
      <div className={classes.action}>
        <button disabled={!formIsValid} className={classes.button}>
          Confirm
        </button>
        <button
          onClick={props.onClose}
          type="button"
          className={classes["button--alt"]}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
