import { ABOUT_TEXT } from "../AllConstants/AllConstants";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { TiCamera } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiC,
  SiMysql,
  SiAmazonaws,
  SiGooglecloud,
  SiLinux,
} from "react-icons/si";
import {
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiCss3,
  SiFramer,
  SiAdobelightroom,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { LiaPython } from "react-icons/lia";
import { AnimatePresence } from "framer-motion";
import { FloatingDock } from "./ui/floating-dock";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux, TbBrandTailwind } from "react-icons/tb";

const About = () => {
  const motionVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const [handlePopup, setHandlePopup] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
  });

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      component: <RiReactjsLine className="text-2xl text-cyan-500" />,
      name: "React",
    },
    {
      component: <SiTypescript className="text-2xl text-blue-500" />,
      name: "TypeScript",
    },
    {
      component: <TbBrandRedux className="text-2xl text-purple-500" />,
      name: "Redux",
    },
    {
      component: <SiMongodb className="text-2xl text-green-500" />,
      name: "MongoDB",
    },
    {
      component: <SiExpress className="text-2xl text-gray-500" />,
      name: "Express",
    },
    {
      component: <FaNodeJs className="text-2xl text-green-500" />,
      name: "Node.js",
    },
    {
      component: <LiaPython className="text-2xl text-blue-400" />,
      name: "Python",
    },
    { component: <TbBrandNextjs className="text-2xl" />, name: "Next.js" },
    {
      component: <SiPostman className="text-2xl text-orange-500" />,
      name: "Postman",
    },
    {
      component: <BiLogoPostgresql className="text-2xl text-cyan-500" />,
      name: "PostgreSQL",
    },
    {
      component: <SiMysql className="text-2xl text-blue-600" />,
      name: "MySQL",
    },
    {
      component: <TbBrandTailwind className="text-2xl text-sky-400" />,
      name: "Tailwind CSS",
    },
    {
      component: <SiAmazonaws className="text-2xl text-yellow-500" />,
      name: "AWS",
    },
    {
      component: <SiGooglecloud className="text-2xl text-red-500" />,
      name: "Google Cloud",
    },
    {
      component: <SiFigma className="text-2xl text-pink-500" />,
      name: "Figma",
    },
    {
      component: <SiFramer className="text-2xl text-purple-400" />,
      name: "Framer",
    },
    {
      component: <SiAdobephotoshop className="text-2xl text-blue-400" />,
      name: "Photoshop",
    },
    {
      component: <SiHtml5 className="text-2xl text-orange-500" />,
      name: "HTML5",
    },
    { component: <SiCss3 className="text-2xl text-blue-500" />, name: "CSS3" },
    { component: <SiGit className="text-2xl text-red-500" />, name: "Git" },
    {
      component: <SiLinux className="text-2xl text-yellow-500" />,
      name: "Linux",
    },
  ];

  // Languages
  const languages = [
    {
      title: "TypeScript",
      icon: <SiTypescript className="h-full w-full text-blue-500" />,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="h-full w-full text-yellow-500" />,
    },
    {
      title: "Python",
      icon: <LiaPython className="h-full w-full text-blue-400" />,
    },
    {
      title: "HTML5",
      icon: <SiHtml5 className="h-full w-full text-orange-500" />,
    },
    { title: "CSS3", icon: <SiCss3 className="h-full w-full text-blue-500" /> },
    {
      title: "C",
      icon: <SiC className="h-full w-full text-blue-600" />,
    },
    // {
    //   title: "PostgreSQL",
    //   icon: <BiLogoPostgresql className="h-full w-full text-cyan-500" />,
    // },
  ];

  // Frameworks / Libraries
  const frameworks = [
    {
      title: "React",
      icon: <RiReactjsLine className="h-full w-full text-cyan-500" />,
    },
    { title: "Next.js", icon: <TbBrandNextjs className="h-full w-full" /> },
    {
      title: "Redux",
      icon: <TbBrandRedux className="h-full w-full text-purple-500" />,
    },
    {
      title: "Express",
      icon: <SiExpress className="h-full w-full text-gray-500" />,
    },
    {
      title: "Node.js",
      icon: <FaNodeJs className="h-full w-full text-green-500" />,
    },
    {
      title: "Tailwind CSS",
      icon: <TbBrandTailwind className="h-full w-full text-sky-400" />,
    },
    {
      title: "Framer",
      icon: <SiFramer className="h-full w-full text-purple-400" />,
    },
  ];

  // Technologies / Tools
  const tools = [
    {
      title: "MongoDB",
      icon: <SiMongodb className="h-full w-full text-green-500" />,
    },
    // {
    //   title: "AWS",
    //   icon: <SiAmazonaws className="h-full w-full text-yellow-500" />,
    // },
    // {
    //   title: "Google Cloud",
    //   icon: <SiGooglecloud className="h-full w-full text-red-500" />,
    // },
    {
      title: "Postman",
      icon: <SiPostman className="h-full w-full text-orange-500" />,
    },
    {
      title: "Figma",
      icon: <SiFigma className="h-full w-full text-pink-500" />,
    },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="h-full w-full text-blue-400" />,
    },
    { title: "Git", icon: <SiGit className="h-full w-full text-red-500" /> },
    {
      title: "Lightroom",
      icon: <SiAdobelightroom className="h-full w-full text-blue-500" />,
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
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-normal text-neutral-800 dark:text-neutral-400 text-justify indent-8 lg:flex hidden"
          >
            My education background includes a recent Bachelor's degree , where
            I graduated with Bachelor's in Computer Science & Technologies.
            During my time there, I developed a strong foundation in Web
            Development, Algorithms, and Data Structures.
          </motion.p>
          <div className="grid lg:grid-cols-2 lg:gap-4 gap-2 select-none">
            <div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              width={500}
              height={500}
              className="flex justify-between items-end flex-col font-brandon lg:text-3xl text-2xl border p-5 gap-5 rounded-xl"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full "
              >
                {" "}
                <span className="font-bold">
                  Bachelor's in Computer Science & Technologies
                </span>{" "}
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-extralight italic text-nowrap"
              >
                - Usha Martin University
              </motion.p>
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="lg:flex justify-center items-end flex-col font-palisade text-2xl  p-5 gap-5 rounded-xl hidden"
            ></div>
            <div
              width={500}
              height={500}
              className="flex justify-between items-end flex-col font-brandon lg:text-3xl text-2xl border p-5 gap-5 rounded-xl"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full "
              >
                {" "}
                <span className="font-bold">
                  Senior Secondary Education
                </span>{" "}
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-extralight italic"
              >
                - St. Xavier's College
              </motion.p>
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="flex justify-between items-end flex-col font-brandon lg:text-3xl text-2xl border p-5 gap-5 rounded-xl"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full "
              >
                {" "}
                <span className="font-bold">Secondary Education</span>
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-extralight italic"
              >
                - Bridgeford School
              </motion.p>
              {/* <p>-Ranchi</p> */}
            </div>
          </div>
        </div>
      ),
    },
    //skills
    {
      title: "TechStack",
      icon: <FaCode />,
      icon2: <TiCamera />,
      icon3: <FaPaintbrush />,
      content: (
        <div>
          <div className="hidden lg:flex flex-col justify-center">
            <div className="gap-5 p-5 flex flex-col items-center justify-center">
              <div className="flex flex-col justify-evenly items-center w-full font-bold lg:text-4xl text-2xl gap-5">
                <h1 className="font-palisade tracking-wide">Languages</h1>
                <div className="flex justify-center items-center gap-5">
                  <FloatingDock items={languages} />
                  <button
                    onClick={() =>
                      setHandlePopup((prev) => ({
                        ...prev,
                        isOpen1: !prev.isOpen1,
                      }))
                    }
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: handlePopup.isOpen1 ? 45 : 0 }} // 45° makes a cross
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="transition-all duration-300" />
                    </motion.div>
                  </button>
                </div>
              </div>

              {/* Animated expandable container */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: handlePopup.isOpen1 ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden w-full flex justify-center"
              >
                <AnimatePresence>
                  {handlePopup.isOpen1 && (
                    <motion.p
                      key="popup-text"
                      className="tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      JavaScript, TypeScript, Python, HTML5, and CSS3 form the
                      core of my programming toolkit, enabling me to craft
                      robust, scalable, and visually engaging applications.
                      JavaScript powers the dynamic logic of my projects, while
                      TypeScript enhances type safety and maintainability.
                      Python adds versatility for backend logic, automation, and
                      data-driven tasks. HTML5 and CSS3 work in tandem to
                      structure and style user interfaces, ensuring that my
                      applications are both functional and aesthetically
                      pleasing across devices.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="gap-5 p-5 flex flex-col items-center justify-center ">
              <div className="flex flex-col justify-evenly items-center w-full font-bold lg:text-4xl text-2xl gap-5">
                <h1 className="font-palisade tracking-wide">
                  Frameworks & Libraries
                </h1>
                <div className="flex justify-center items-center gap-5">
                  <FloatingDock
                    mobileClassName="" // only for demo, remove for production
                    items={frameworks}
                  />
                  <button
                    onClick={() =>
                      setHandlePopup((prev) => ({
                        ...prev,
                        isOpen2: !prev.isOpen2,
                      }))
                    }
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: handlePopup.isOpen2 ? 45 : 0 }} // 45° makes a cross
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="transition-all duration-300" />
                    </motion.div>
                  </button>
                </div>
              </div>
              {/* Animated expandable container */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: handlePopup.isOpen2 ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden w-full flex justify-center"
              >
                <AnimatePresence>
                  {handlePopup.isOpen2 && (
                    <motion.p
                      key="popup-text"
                      className="tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      I specialize in modern frameworks like React, Next.js,
                      Redux, Tailwind CSS, and Framer, which streamline the
                      process of building responsive, high-performance
                      applications. React serves as my go-to for creating
                      modular, reusable components, while Next.js enhances SEO
                      and server-side rendering. Redux offers state management
                      for complex projects, and Tailwind CSS speeds up styling
                      with utility-first classes. Framer brings interactive
                      animations and polished micro-interactions to elevate user
                      experience.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="gap-5 p-5 flex flex-col items-center justify-center ">
              <div className="flex flex-col justify-evenly items-center w-full font-bold lg:text-4xl text-2xl gap-5">
                <h1 className="font-palisade tracking-wide">
                  Databases , Tools & Platforms
                </h1>
                <div className="flex justify-center items-center gap-5">
                  <FloatingDock
                    mobileClassName="" // only for demo, remove for production
                    items={tools}
                  />
                  <button
                    onClick={() =>
                      setHandlePopup((prev) => ({
                        ...prev,
                        isOpen3: !prev.isOpen3,
                      }))
                    }
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: handlePopup.isOpen3 ? 45 : 0 }} // 45° makes a cross
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="transition-all duration-300" />
                    </motion.div>
                  </button>
                </div>
              </div>
              {/* Animated expandable container */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: handlePopup.isOpen3 ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden w-full flex justify-center"
              >
                <AnimatePresence>
                  {handlePopup.isOpen3 && (
                    <motion.p
                      key="popup-text"
                      className="tracking-wide flex justify-center items-center flex-col gap-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      My database expertise spans MongoDB, PostgreSQL, and
                      MySQL, giving me the flexibility to choose the right
                      solution for any project. MongoDB’s document-oriented
                      structure is ideal for fast, scalable applications,
                      PostgreSQL offers robust relational features for
                      data-heavy systems, and MySQL provides a dependable
                      foundation for traditional web apps. This range ensures I
                      can handle both structured and unstructured data
                      efficiently.
                      <span>
                        I leverage a diverse set of tools and platforms to
                        streamline development workflows and enhance deployment
                        capabilities. AWS and Google Cloud provide reliable
                        infrastructure for hosting and scaling applications.
                        Postman accelerates API testing and debugging, while Git
                        ensures version control and collaborative development.
                        Design tools like Figma and Photoshop support UI/UX
                        creation, and Linux offers a stable development
                        environment for server management and automation.
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-2 lg:hidden"
          >
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                variants={motionVariants(3 + index * 0.5)}
                initial="initial"
                animate="animate"
                className="relative flex items-center justify-center rounded-full border-4 border-neutral-800 p-4"
                onMouseEnter={() => setHoveredIcon(icon.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {icon.component}
                {hoveredIcon === icon.name && (
                  <>
                    {/* Rotating Shape */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-500"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    ></motion.div>

                    {/* Glowing Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-xl"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    ></motion.div>

                    {/* Tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800  px-5 py-2 text-lg rounded-2xl text-white shadow-lg font-Childish duration-300">
                      {icon.name}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
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
        className="lg:my-20 my-10 text-center text-4xl font-agile bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent w-fit uppercase tracking-widest"
      >
        About
      </motion.h2>
      <div className="lg:flex flex-wrap justify-center items-center hidden">
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
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/My_Photographs/Screenshot%202025-07-31%20at%205.39.36%E2%80%AFPM.png?updatedAt=1753963920513`}
              className="rounded-xl lg:w-3/4"
              alt="about_logo"
            />
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
