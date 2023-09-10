import React from "react";
import { Button, Space, Steps, Table, Tag } from "antd";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ApiContext from "../../store/api-context";

const AppoitmentsTable = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const date = new Date("2023-08-23");

  // const currentDate = new Date();
  // const specificDate = new Date(date);
  // const differenceInTime = specificDate.getTime() - currentDate.getTime();
  // const differenceInSeconds = Math.floor(differenceInTime / 1000);
  // const seconds = differenceInSeconds % 60;
  // const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  // const minutes = differenceInMinutes % 60;
  // const differenceInHours = Math.floor(differenceInMinutes / 60);
  // const hours = differenceInHours % 24;
  // const differenceInDays = Math.floor(differenceInHours / 24);

  // useEffect(() => {
  //   setTimeLeft({ days: differenceInDays, hours, minutes, seconds });
  // }, [date]);

  const [appointments, setAppointments] = useState([]);

  const fetchUserAppointments = async () => {
    const data = await sendRequest({
      url: "/user/appointments",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(data[0]);
    let appData = [];
    for (const app of data[0].appointments) {
      const updatedApp = {
        ...app,
        status: "Waiting",
        doctor: "omar sh",
        action: (
          <Button
            onClick={() => navigate("/room/session")}
            disabled={false}
            type="primary"
          >
            Join
          </Button>
        ),
      };
      appData.push(updatedApp);
    }
    setAppointments(appData);
  };

  useEffect(() => {
    fetchUserAppointments();
  }, []);

  const columns = [
    {
      title: "Appointment Date",
      dataIndex: "appointment_date",
      key: "appointment_date",
    },
    {
      title: "Appointment Time",
      dataIndex: "appointment_time",
      key: "appointment_time",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];
  const data = [
    {
      date: "23/8/2023",
      time: "3:00 PM",
      doctor: "Omar Shahwan",
      status: timeLeft
        ? `Waiting, ${timeLeft.days} D, ${timeLeft.hours} H, ${timeLeft.minutes} M, ${timeLeft.seconds} S`
        : "",
      action: (
        <Button
          onClick={() => navigate("/room/session")}
          disabled={false}
          type="primary"
        >
          Join
        </Button>
      ),
    },
  ];
  const navigate = useNavigate();

  return (
    <Table pagination={false} columns={columns} dataSource={appointments} />
  );
};
export default AppoitmentsTable;
