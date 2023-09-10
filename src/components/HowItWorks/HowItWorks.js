import Title from "../UI/Title";
import Img from "../../assets/1.png";
import Steps from "./Steps";

const HowItWorks = () => {
  return (
    <section className="py-[70px]">
      <Title>How it works</Title>
      <p className="text-center text-[#777]">
        Consult a doctor with three easy steps
      </p>
      <div
        style={{ marginTop: "40px" }}
        className="container grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5"
      >
        <Steps />
        <div>
          <img data-aos="zoom-in" data-aos-duration="500" className="w-full" src={Img} alt="Consulting" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
