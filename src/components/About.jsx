// import Mr_saxena_logo from "../assets/Mr_saxena_logo.png";
import { ABOUT_TEXT } from "../AllConstants/AllConstants";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { TiCamera } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
import RandomImageSlider from "./ui/random-image-slider";
import { galleryBannerImages } from "../AllConstants/AllConstants";
import { AiFillInstagram } from "react-icons/ai";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  RadarController,
} from "chart.js";

const About = () => {
  Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    RadarController
  );
  const Image = [
    {
      id: "0",
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1721488798/Portfolio/photo_jv2aiq.jpg",
    },
  ];

  const TimeLineData = [
    //education
    {
      title: "Education",
      icon: <FaSchool />,
      icon2: <IoSchool />,
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-400 text-justify indent-8">
            My education background includes a recent Bachelor's degree , where
            I graduated with Bachelor's in Computer Science & Technologies.
            During my time there, I developed a strong foundation in Web
            Development, Algorithms, and Data Structures.
          </p>
          <div className="grid lg:grid-cols-2 gap-4 select-none">
            <div
              width={500}
              height={500}
              className="flex justify-center items-end flex-col font-roller text-2xl border p-5 gap-5 rounded-xl"
            >
              <h1 className="w-full ">
                {" "}
                <span className="font-bold">
                  Bachelor's in Computer Science & Technologies
                </span>{" "}
                <br />
                from
              </h1>
              <p>Usha Martin University</p>
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="lg:flex justify-center items-end flex-col font-roller text-2xl  p-5 gap-5 rounded-xl hidden"
            >
              {/* <h1>
                 Bachelor's in Computer Science & Technologies{" "}
                <br /> from
              </h1>
              <p>Usha Martin University</p> */}
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="flex justify-center items-end flex-col font-roller text-2xl border p-5 gap-5 rounded-xl"
            >
              <h1 className="w-full ">
                {" "}
                <span className="font-bold">
                  Senior Secondary Education
                </span>{" "}
                <br />
                from
              </h1>
              <p>St. Xavier's College</p>
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="flex justify-center items-end flex-col font-roller text-2xl border p-5 gap-5 rounded-xl"
            >
              <h1 className="w-full ">
                {" "}
                <span className="font-bold">Secondary Education</span> <br />
                from
              </h1>
              <p>Bridgeford School</p>
              {/* <p>-Ranchi</p> */}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      icon: <FaCode />,
      icon2: <TiCamera />,
      icon3: <FaPaintbrush />,
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-400 text-justify indent-8 text-sm lg:text-base">
            I blend my passion for{" "}
            <span className="font-bold lg:text-lg">Painting</span> and{" "}
            <span className="font-bold lg:text-lg">Photography</span> with
            strong skills in{" "}
            <span className="font-bold lg:text-lg">
              Full Stack Web Development
            </span>
            . My GitHub showcases projects built with the MERN stack, including
            user authentication systems, REST APIs, and real-time web apps. This
            mix of creativity and code allows me to build visually engaging and
            technically sound digital solutions.
          </p>

          <div className="grid grid-cols-2 grid-rows-6 gap-4">
            <div className="row-span-4">
              <div className="flex justify-center items-center relative w-full h-full overflow-hidden rounded-xl">
                <div className=" shadow-2xl shadow-black/50  w-full h-full ">
                  <RandomImageSlider images={galleryBannerImages} />
                </div>
                <a
                  href="https://www.instagram.com/mr_saxena007/"
                  target="_blank"
                  className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-700 ease-in-out hover:bg-black/60 tracking-widest hover:tracking-[0.5rem]"
                >
                  <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel  uppercase">
                    Persona
                    <span>
                      <AiFillInstagram className="h-4 w-4  text-red-500" />
                    </span>
                  </h1>
                </a>
              </div>
            </div>
            <div className="row-span-4 col-start-2 row-start-3">
              <div className="flex justify-center items-center relative w-full h-full overflow-hidden rounded-xl">
                <div className=" shadow-2xl shadow-black/50  w-full h-full ">
                  <RandomImageSlider images={galleryBannerImages} />
                </div>
                <a
                  href="https://www.instagram.com/mr_saxena007/"
                  target="_blank"
                  className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-700 ease-in-out hover:bg-black/60 tracking-widest hover:tracking-[0.5rem]"
                >
                  <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel  uppercase">
                    Persona
                    <span>
                      <AiFillInstagram className="h-4 w-4  text-red-500" />
                    </span>
                  </h1>
                </a>
              </div>
            </div>
            <div className="row-span-2 col-start-2 row-start-1">
              <img
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
            <div className="row-span-2 row-start-5">
              <img
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-agile bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent w-fit uppercase tracking-widest"
      >
        About Me
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
            <p className="my-2 max-w-xl py-6 font-light indent-8 text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
      <div>
        <Timeline data={TimeLineData} />
      </div>
    </div>
  );
};

export default About;
