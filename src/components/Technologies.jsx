import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaPython } from "react-icons/lia";
import { motion } from "framer-motion";

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

const Technologies = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      component: <RiReactjsLine className="text-7xl text-cyan-500" />,
      name: "React",
    },
    {
      component: <SiMongodb className="text-7xl text-green-500" />,
      name: "MongoDB",
    },
    {
      component: <SiExpress className="text-7xl text-cyan-500" />,
      name: "Express",
    },
    {
      component: <FaNodeJs className="text-7xl text-green-500" />,
      name: "Node.js",
    },
    {
      component: <LiaPython className="text-7xl text-cyan-500" />,
      name: "Python",
    },
    { component: <TbBrandNextjs className="text-7xl" />, name: "Next.js" },
    {
      component: <SiPostman className="text-7xl text-orange-500" />,
      name: "Postman",
    },
    {
      component: <BiLogoPostgresql className="text-7xl text-cyan-500" />,
      name: "PostgreSQL",
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center"
      >
        <h1 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Technologies
        </h1>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
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
  );
};

export default Technologies;
