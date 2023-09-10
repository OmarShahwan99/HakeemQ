import BookingForm from "./Booking/BookingForm";
import DoctorDetail from "./DoctorDetail";
import classes from "./DoctorItem.module.css";
// import Modal from "../UI/Modal";
import { useState, useEffect, useContext, useCallback } from "react";
import MoreInfo from "./MoreInfo";
import { RotatingLines } from "react-loader-spinner";

import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import ApiContext from "../../store/api-context";

import { Modal } from "antd";
import BookingModal from "./Booking/BookingModal";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const DoctorProfile = (props) => {
  const { isLoading, error, sendRequest } = useContext(ApiContext);

  const [chooseTimeLoading, setChooseTimeLoading] = useState(false);

  const [bookingModalIsVisible, setBookingModalIsVisible] = useState(false);

  const [availableTimes, setAvailableTimes] = useState(null);

  const [selectedDate, setSelectedDate] = useState();

  const [bookedMsg, setBookedMsg] = useState(null);

  const [registrationModal, setRegistrationModal] = useState(false);

  const { name, spz, email, phone } = props.doctorInfo;

  const { isAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const showBookingModalHandler = () => {
    if (!isAuth) {
      setRegistrationModal(true);
      return;
    }
    setBookingModalIsVisible(true);
  };
  const closeBookingModalHandler = () => {
    setBookingModalIsVisible(false);
  };

  const selectDateHandler = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const fetchAvailableTimes = useCallback(async () => {
    if (selectedDate) {
      setChooseTimeLoading(true);
      try {
        const data = await sendRequest({
          url: `/available-times/${props.id}/${selectedDate}`,
          headers: { "Content-Type": "application/json" },
        });
        setAvailableTimes(data.available_times);
        setChooseTimeLoading(false);
      } catch (error) {
        setChooseTimeLoading(false);
        console.log(error);
      }
    }
  }, [props.id, selectedDate, sendRequest]);

  useEffect(() => {
    fetchAvailableTimes();
  }, [fetchAvailableTimes]);

  const bookAppoitmentHandler = async (bookingData) => {
    try {
      const data = await sendRequest({
        url: "/appoints/store",
        data: bookingData,
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      setBookedMsg(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  let modalContent = (
    <>
      <h1 style={{ marginBottom: "20px" }}>Dr.{name}</h1>
      <BookingForm
        times={availableTimes}
        onClose={closeBookingModalHandler}
        id={props.id}
        onSelectDate={selectDateHandler}
        onBook={bookAppoitmentHandler}
        isLoading={chooseTimeLoading}
      />
    </>
  );

  if (isLoading) {
    modalContent = (
      <RotatingLines
        strokeColor="var(--primary)"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    );
  }
  if (error) {
    modalContent = (
      <div className={`${classes.msg} ${classes.danger}`}>
        <FontAwesomeIcon className={classes.icon} icon={faCircleXmark} />
        <div className={classes["msg-content"]}>
          <h3>Error!</h3>
          <p>{error}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={closeBookingModalHandler}>Close</button>
        </div>
      </div>
    );
  }
  if (!isLoading && !error && bookedMsg) {
    modalContent = (
      <div className={`${classes.msg} ${classes.success}`}>
        <FontAwesomeIcon className={classes.icon} icon={faCheckCircle} />
        <div className={classes["msg-content"]}>
          <h3>Successful!</h3>
          <p>
            {bookedMsg}, booking information has been sent to your mail inbox...
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={closeBookingModalHandler}>Close</button>
        </div>
      </div>
    );
  }

  const modalClasses = isLoading
    ? classes["loading-modal"]
    : error
    ? classes["error-modal"]
    : classes["booking-modal"];

  return (
    <div className={`${classes.profile} container`}>
      <DoctorDetail
        name={name}
        spz={spz}
        email={email}
        phone={phone}
        isLoading={isLoading}
      />
      <MoreInfo />
      {ReactDOM.createPortal(
        <button
          onClick={showBookingModalHandler}
          className={classes["booking-button"]}
        >
          <h4>Book an appoitment</h4>
          <FontAwesomeIcon icon={faVideo} />
        </button>,
        document.getElementById("overlays")
      )}

      <Modal
        title="Booking Appointemt"
        open={bookingModalIsVisible}
        onCancel={() => setBookingModalIsVisible(false)}
        footer={null}
      >
        <BookingModal />
      </Modal>
      <Modal
        open={registrationModal}
        title="You are not authorized!"
        onCancel={() => setRegistrationModal(false)}
        onOk={() => navigate("/login")}
        okText="login"
      >
        <div>
          <p>
            <Link style={{ color: "blue" }} to="/login">
              Login
            </Link>{" "}
            or{" "}
            <Link style={{ color: "blue" }} to="/user-register">
              Register
            </Link>{" "}
            to book an appointment.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default DoctorProfile;
