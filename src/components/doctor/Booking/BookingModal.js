import { useState } from "react";
import { Button, message, notification, Steps, theme } from "antd";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import ApiContext from "../../../store/api-context";
import { useNavigate, useParams } from "react-router";

const BookingModal = (props) => {
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState(null);

  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const { drId } = useParams();

  const dateChangeHandler = (value) => {
    console.log(value);
    setDate(value);
  };

  const reasonChangeHandler = (event) => {
    console.log(event.target.value);
    setReason(event.target.value);
  };

  const navigate = useNavigate();

  const appintemntHandler = async () => {
    const formattedDate = `${date.$y}-${date.$M + 1}-${date.$D}`;
    const time = date.$H;

    const data = await sendRequest({
      method: "POST",
      url: `/appoints/store`,
      data: {
        doctor_id: drId,
        appointment_date: formattedDate,
        appointment_time: time,
        description: reason,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 201) {
      notification.open({
        type: "success",
        message: data.msg,
      });
      navigate("/user");
    }
    console.log(data);
  };

  const steps = [
    {
      title: "Reason and Time",
      content: (
        <AppointmentTime
          onSetReason={reasonChangeHandler}
          onSetDate={dateChangeHandler}
          date={date}
          reason={reason}
        />
      ),
    },
    {
      title: "Paymnent",
      content: <Payment />,
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
      <div
        style={{
          backgroundColor: token.colorFillAlter,
          padding: "20px",
          margin: "16px 0",
          borderRadius: "8px",
        }}
      >
        {steps[current].content}
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            disabled={!reason || !date}
            style={{ backgroundColor: reason && date ? "blue" : "" }}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={appintemntHandler}
            style={{ backgroundColor: "blue" }}
            loading={isLoading}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default BookingModal;

dayjs.extend(customParseFormat);

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const AppointmentTime = ({ onSetDate, onSetReason, reason, date }) => (
  <>
    <div>
      <label className="block mb-1">Date and Time</label>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{
          defaultValue: dayjs("00:00:00", "HH:mm:ss"),
        }}
        onChange={onSetDate}
        value={date}
      />
    </div>
    <div className="mt-2">
      <label className="block mb-1">Reason</label>
      <TextArea value={reason} onChange={onSetReason}></TextArea>
    </div>
  </>
);

const Payment = () => {
  const change = (e) => {
    console.log(e.target.value);
  };
  return (
    <Radio.Group onChange={change} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">MTN Cash</Radio.Button>
      <Radio.Button value="b">Syriatel Cash</Radio.Button>
      <Radio.Button value="c">Fatora</Radio.Button>
    </Radio.Group>
  );
};
