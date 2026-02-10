import Intro from "./intro";
import Landing from "./landing";
import Services from "./services";
import Testimonials from "./testimonials";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#121111] text-neutral-200 z-50 shadow-2xl shadow-black">
        <Landing />
        <Intro />
        <Services />
        <Testimonials />
      </div>
      <div className="h-screen bg-transparent" />
    </div>
  );
};

export default Hero;
