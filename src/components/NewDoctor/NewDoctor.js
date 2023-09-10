import doctorImg from "../../assets/doctor.png";
import { Link } from "react-router-dom";
import DoctorRegisterForm from "./DoctorRegisterForm";

const NewDoctor = () => {
  return (
    <div className="bg-blue-100 py-5 min-h-screen">
      <div className="container h-screen">
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
          <div className="bg-[#1459d5] overflow-hidden hidden md:block">
            <Link to="/home" className="p-3 block text-2xl text-white">
              HakeemQ
            </Link>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img src={doctorImg} alt="doctor" />
                <div className="absolute w-[420px] -bottom-[60px] left-[50%] -translate-x-[50%] p-8 text-center bg-white rounded-lg">
                  <h2 className="text-2xl">Welcome To Doctor's</h2>
                  <span className="text-3xl text-red-400">Platform</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 bg-white flex flex-col justify-center">
            <h1 className="text-3xl text-center mb-5 text-[#1459d5]">
              Doctor Register
            </h1>
            <DoctorRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDoctor;
