import Mr_saxena_logo from "../assets/Mr_saxena_logo.png";
import { ABOUT_TEXT } from "../AllConstants/AllConstants";
import { motion } from "framer-motion";

const About = () => {
  const Image = [
    {
      id: "0",
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1721488798/Portfolio/photo_jv2aiq.jpg",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About{" "}
        <span className="text-neutral-500 bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Me
        </span>
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={Image[0].url}
              className="rounded-xl w-1/2"
              alt="about_logo"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
