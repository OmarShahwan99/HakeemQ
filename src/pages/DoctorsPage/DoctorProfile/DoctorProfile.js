import DoctorItem from "../../../components/doctor/DoctorItem";

import { useParams } from "react-router";
import AltHeader from "../../../components/layout/AltHeader";

import classes from "./DoctorProfile.module.css";

import { useCallback, useContext, useEffect, useState } from "react";
import ApiContext from "../../../store/api-context";

const DoctorProfile = (props) => {
  const { drId } = useParams();
  const [doctor, setDoctor] = useState({});

  const sendRequest = useContext(ApiContext).sendRequest;

  const fetchExistingDoctor = useCallback(async () => {
    try {
      const drData = await sendRequest({
        url: `/doctors/${drId}`,
        headers: { "Content-Type": "applicatoin/json" },
      });
      console.log(drData);
      setDoctor(drData);
    } catch (error) {
      console.log(error);
    }
  }, [sendRequest, drId]);

  useEffect(() => {
    fetchExistingDoctor();
  }, []);

  return (
    <div className={classes["doctor-profile"]}>
      <AltHeader />
      <DoctorItem doctorInfo={doctor} id={drId} />
    </div>
  );
};

export default DoctorProfile;
