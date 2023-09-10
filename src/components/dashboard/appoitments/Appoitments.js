import classes from "./Appoitments.module.css";
import AppoitmentCard from "./AppoitmentCard";

import { useContext, useEffect, useState } from "react";
import ApiContenxt from "../../../store/api-context";

const Appoitments = () => {
  const [appData, setAppData] = useState([]);
  const sendRequest = useContext(ApiContenxt).sendRequest;

  const fetchAppointments = async () => {
    try {
      const data = await sendRequest({
        url: "/appoints",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      setAppData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointmentsHandler = async (appId) => {
    try {
      const data = await sendRequest({
        url: `/appoints/${appId}/delete`,
        method: "DELETE",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`container ${classes.appoitments}`}>
      <div className={classes.header}>
        <div className={classes.title}>
          <h2>Appointments</h2>
          <p>Your appointments in this week</p>
        </div>
      </div>
      <div className={classes["app-cards"]}>
        {appData.map((app) => (
          <AppoitmentCard
            key={app.id}
            id={app.id}
            name={app.name}
            email={app.email}
            gender={app.gender}
            phone={app.phone}
            appTime={app.appointment_time}
            appDate={app.appointment_date}
            age={app.age}
            onDelete={deleteAppointmentsHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Appoitments;
