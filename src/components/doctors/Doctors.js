import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./Doctors.module.css";

import Title from "../UI/Title";
import { useEffect, useState, useContext } from "react";
import ApiContext from "../../store/api-context";

import { RotatingLines } from "react-loader-spinner";
import DoctorCardd from "./DoctorCardd";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  const { isLoading, error, sendRequest } = useContext(ApiContext);

  const fetchDoctors = async () => {
    try {
      const data = await sendRequest({ url: "/doctors-activated" });
      setDoctors(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;

  if (isLoading) {
    content = (
      <RotatingLines
        strokeColor="var(--primary)"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    );
  }
  if (!isLoading && error) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !error) {
    content = doctors.map((dr) => (
      <DoctorCardd key={dr.id} name={dr.name} spz={dr.spz} id={dr.id} />
    ));
  }

  return (
    <div id="doctors" className={`${classes.doctors} `}>
      <div className="mb-12">
        <Title>Recent Doctors</Title>
        <p style={{ textAlign: "center", color: "#777", margin: "10px" }}>
          Who will help you to have a fresh health.
        </p>
      </div>
      <div className="container grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {doctors.map((dr) => (
          <DoctorCardd
            key={dr.id}
            name={dr.name}
            spz={dr.spz.name}
            id={dr.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
