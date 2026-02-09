import { useState } from "react";
import { FaGithub, FaPinterest } from "react-icons/fa";
import { motion } from "framer-motion";
import RandomImageSlider from "./ui/random-image-slider";
import {
  galleryBannerImages,
  pinterestUrls,
} from "../AllConstants/AllConstants";
import { AiFillInstagram } from "react-icons/ai";
import { IconCloud } from "./ui/icon-cloud";

const Technologies = () => {
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const shuffledPinterestImages = shuffleArray(pinterestUrls);
  const shuffledInstagramImages = shuffleArray(galleryBannerImages);

  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "stackBlitz",
    "postman",
    "adobephotoshop",
    "adobelightroom",
    "framer",
  ];

  const GlobeImage = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const chartVariants = {
    hidden: {
      scale: 0,
      rotate: -90,
      opacity: 0,
      transformOrigin: "center center",
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
      },
    },
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center"
      >
        <h1 className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-4xl text-transparent w-fit font-agile uppercase tracking-widest">
          hobby & interests
        </h1>
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="lg:block hidden mb-8 font-normal text-neutral-800 dark:text-neutral-400 text-justify indent-8 text-sm lg:text-base"
      >
        I blend my passion for{" "}
        <span className="font-bold lg:text-lg">Painting</span> and{" "}
        <span className="font-bold lg:text-lg">Photography</span> with strong
        skills in{" "}
        <span className="font-bold lg:text-lg">Full Stack Web Development</span>
        . <br /> This mix of creativity and code allows me to build visually engaging
        and technically sound digital solutions.
      </motion.p>

      <div className="flex justify-center items-center lg:flex-row flex-col">
        {/* instagram */}
        <div className="flex justify-center items-center lg:w-96 lg:h-96 h-48 w-full">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center items-center relative h-full w-full overflow-hidden rounded-xl"
          >
            <div className="shadow-2xl shadow-black/50 w-full h-full">
              <RandomImageSlider
                images={shuffledInstagramImages}
                direction="leftToRight"
              />
            </div>
            <a
              href="https://www.instagram.com/mr_saxena007/"
              target="_blank"
              className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-700 ease-in-out hover:bg-black/60 tracking-widest hover:tracking-[0.5rem]"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8] font-Cinzel uppercase"
              >
                Persona
                <span>
                  <AiFillInstagram className="h-4 w-4 text-[#EA0096]" />
                </span>
              </motion.h1>
            </a>
          </motion.div>
        </div>

        {/* globe */}
        <div className="">
          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center items-center "
          >
            <IconCloud images={GlobeImage} />
          </motion.div>
        </div>

        {/* Pinterest */}
        <div className="flex justify-center items-center lg:w-96 lg:h-96 h-48 w-full">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center relative h-full w-full overflow-hidden rounded-xl"
          >
            <div className="shadow-2xl shadow-black/50 w-full h-full">
              <RandomImageSlider images={shuffledPinterestImages} />
            </div>
            <a
              href="https://pin.it/1gXqcEuwM"
              target="_blank"
              className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-700 ease-in-out hover:bg-black/60 tracking-widest hover:tracking-[0.5rem]"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8] font-Cinzel uppercase"
              >
                pinterest
                <span>
                  <FaPinterest className="h-4 w-4 text-[#E60022]" />
                </span>
              </motion.h1>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
