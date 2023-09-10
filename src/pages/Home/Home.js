import Header from "../../components/layout/Header";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/features/Features";
import Doctors from "../../components/doctors/Doctors";
import About from "../../components/about/About";
import Contact from "../../components/Contact/Contact";
import Specialists from "../../components/Specialists/Specialists";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Specialists />
      <HowItWorks />
      <Doctors />
      <About />
      <Contact />
    </>
  );
};

export default Home;
