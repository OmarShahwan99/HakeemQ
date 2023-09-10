import { Link } from "react-router-dom";

import spzIcon from "../../assets/dentist.png";

const SpecialistCard = (props) => {
  return (
    <Link
      to="/spzs/1"
      className="flex flex-col items-center gap-3 bg-white rounded-md p-5"
      data-aos={props.animation}
      data-aos-duration={props.duration}
    >
      <div className="max-w-[80px]">
        <img className="w-full" src={props.icon} />
      </div>
      <h2 className="text-2xl text-gray-600">{props.name}</h2>
    </Link>
  );
};

export default SpecialistCard;
