import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingDock } from "../../components/ui/floatingDock";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiC,
} from "react-icons/si";
import {
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiCss3,
  SiFramer,
  SiAdobelightroom,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { LiaPython } from "react-icons/lia";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux, TbBrandTailwind } from "react-icons/tb";

const TechStack = () => {
  const [handlePopup, setHandlePopup] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
  });

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

  return (
    <div className="flex flex-col justify-center text-neutral-300 text-[18px]">
      {/* languages  */}
      <div className="gap-5 p-5 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-evenly items-center w-full font-bold lg:text-4xl text-2xl gap-5">
          <h1 className="font-palisade tracking-wide font-interBold">
            Languages
          </h1>
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
                <BiPlus className="transition-all duration-300" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Animated expandable container */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: handlePopup.isOpen1 ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden w-1/2 flex justify-center text-center"
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
                JavaScript, TypeScript, Python, HTML5, and CSS3 form the core of
                my programming toolkit, enabling me to craft robust, scalable,
                and visually engaging applications. JavaScript powers the
                dynamic logic of my projects, while TypeScript enhances type
                safety and maintainability. Python adds versatility for backend
                logic, automation, and data-driven tasks. HTML5 and CSS3 work in
                tandem to structure and style user interfaces, ensuring that my
                applications are both functional and aesthetically pleasing
                across devices.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* frameworks  */}
      <div className="gap-5 p-5 flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-evenly items-center w-full font-bold lg:text-4xl text-2xl gap-5">
          <h1 className="font-palisade tracking-wide font-interBold">
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
                <BiPlus className="transition-all duration-300" />
              </motion.div>
            </button>
          </div>
        </div>
        {/* Animated expandable container */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: handlePopup.isOpen2 ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden w-1/2 flex justify-center text-center"
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
                I specialize in modern frameworks like React, Next.js, Redux,
                Tailwind CSS, and Framer, which streamline the process of
                building responsive, high-performance applications. React serves
                as my go-to for creating modular, reusable components, while
                Next.js enhances SEO and server-side rendering. Redux offers
                state management for complex projects, and Tailwind CSS speeds
                up styling with utility-first classes. Framer brings interactive
                animations and polished micro-interactions to elevate user
                experience.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* database tools and platform */}
      <div className="gap-5 p-5 flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-evenly items-center w-full font-bold lg:text-4xl text-2xl gap-5">
          <h1 className="font-palisade tracking-wide font-interBold">
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
                <BiPlus className="transition-all duration-300" />
              </motion.div>
            </button>
          </div>
        </div>
        {/* Animated expandable container */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: handlePopup.isOpen3 ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden w-1/2 flex justify-center text-center"
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
                My database expertise spans MongoDB, PostgreSQL, and MySQL,
                giving me the flexibility to choose the right solution for any
                project. MongoDB’s document-oriented structure is ideal for
                fast, scalable applications, PostgreSQL offers robust relational
                features for data-heavy systems, and MySQL provides a dependable
                foundation for traditional web apps. This range ensures I can
                handle both structured and unstructured data efficiently.
                <span>
                  I leverage a diverse set of tools and platforms to streamline
                  development workflows and enhance deployment capabilities. AWS
                  and Google Cloud provide reliable infrastructure for hosting
                  and scaling applications. Postman accelerates API testing and
                  debugging, while Git ensures version control and collaborative
                  development. Design tools like Figma and Photoshop support
                  UI/UX creation, and Linux offers a stable development
                  environment for server management and automation.
                </span>
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
