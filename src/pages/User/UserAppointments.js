import { useContext, useEffect } from "react";
import ApiContext from "../../store/api-context";
import AppoitmentsTable from "../../components/user/AppoitmentsTable";

const UserAppointments = () => {
  // const { sendRequest, isLoading, error } = useContext(ApiContext);

  // const fetchAppointments = async () => {
  //   const data = await sendRequest({
  //     url: "/user/appoints",
  //   });
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchAppointments();
  // }, []);

  return (
    <div>
      <AppoitmentsTable />
    </div>
  );
};

export default UserAppointments;
