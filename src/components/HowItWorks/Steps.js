const Steps = () => {
  return (
    <div>
      <ul>
        <li
          data-aos="slide-right"
          data-aos-duration="1000"
          className="mb-10 flex items-center gap-3"
        >
          <span className="p-3 text-white text-xl rounded-full bg-gray-700">
            1
          </span>
          <div>
            <p className="text-xl">Choose a specialist</p>
            <p className="text-[#777] mt-1">
              Click to a choosen specialist to view thier doctors
            </p>
          </div>
        </li>
        <li
          data-aos="slide-right"
          data-aos-duration="2000"
          className="mb-10 flex items-center gap-3"
        >
          <span className="p-3 text-white text-xl rounded-full bg-gray-700">
            2
          </span>
          <div>
            <p className="text-xl">Search Doctor</p>
            <p className="text-[#777] mt-1">
              Search a doctor you want to consult it
            </p>
          </div>
        </li>
        <li
          data-aos="slide-right"
          data-aos-duration="3000"
          className="flex items-center gap-3"
        >
          <span className="p-3 text-white text-xl rounded-full bg-gray-700">
            3
          </span>
          <div>
            <p className="text-xl">Book an appointment</p>
            <p className="text-[#777] mt-1">
              in a choosen doctor profile fill out an appointment form
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
