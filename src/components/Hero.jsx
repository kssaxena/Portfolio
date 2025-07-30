import { HERO_CONTENT } from "../AllConstants/AllConstants";
import HeroPhoto from "../assets/HeroPhoto.jpg";
import HeroPhoto2 from "../assets/HeroPhoto2.jpg";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:px">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="lg:pb-16 pb-10 text-6xl font-extralight lg:mt-16 lg:text-8xl uppercase font-sans px-20  tracking-widest font-blanka"
            >
              kshitij saxena
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent lg:text-4xl text-2xl lg:px-20 tracking-wider font-agile"
              // className="lg:text-4xl text-2xl lg:px-20 tracking-wider"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 py-6 font-light tracking-tight w-full text-justify"
            >
              {/* <TextGenerateEffect words= duration={0.2} /> */}
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={HeroPhoto2}
              alt="logo"
              className="w-3/4 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
