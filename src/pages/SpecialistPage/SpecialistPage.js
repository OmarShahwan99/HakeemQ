import Header from "../../components/layout/Header";
import { useContext } from "react";
import ApiContext from "../../store/api-context";
import { useParams } from "react-router";
import { useEffect } from "react";

import DoctorCardd from "../../components/doctors/DoctorCardd";

const SpecialistPage = () => {
  const { id } = useParams();

  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const fetchDoctors = async () => {
    const data = await sendRequest({
      url: `/spz/${id}`,
    });
    console.log(data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <>
      <Header />
      <div className="container py-[120px]">
        <h1 className="text-5xl uppercase font-bold text-gray-700 mb-[32px] text-center">
          Diabetes
        </h1>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <DoctorCardd name="Omar Shahwan" spz="Diabetes" />
          <DoctorCardd name="Ali Alshikh" spz="Diabetes" />
          {/* <DoctorCardd />
          <DoctorCardd />
          <DoctorCardd />
          <DoctorCardd />
          <DoctorCardd />
          <DoctorCardd /> */}
        </div>
      </div>
    </>
  );
};

export default SpecialistPage;
