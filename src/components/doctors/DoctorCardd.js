import cardImg from "../../assets/Doctor-icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DoctorCardd = (props) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105"
    >
      <div className="p-7 flex flex-col items-center gap-4">
        <div className="max-w-[160px] rounded-full border-white border-4 shadow-lg">
          <img className="w-full rounded-full" src={cardImg} alt="doctor" />
        </div>
        <div className="text-center">
          <h2 className="font-medium text-xl">{props.name}</h2>
          <p className="my-2 text-gray-300">Damascus, Syria</p>
          <p className="rounded-md text-[#1459d5] text-sm font-bold bg-blue-100 uppercase px-5 py-1 tracking-widest">
            {props.spz}
          </p>
        </div>
      </div>
      <Link
        to={`/doctors/${props.id}`}
        className="flex items-center justify-center py-3 gap-2 bg-gray-100 text-gray-400"
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>More about doctor</span>
      </Link>
    </div>
  );
};

export default DoctorCardd;
