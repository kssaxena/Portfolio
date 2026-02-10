import React from "react";
import { FaPinterest } from "react-icons/fa";
import { motion } from "framer-motion";
import { galleryBannerImages, pinterestUrls } from "../../constants/constant";
import { AiFillInstagram } from "react-icons/ai";
import RandomImageSlider from "../../components/ui/RandomImageSlider";

const Hobby = () => {
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
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col w-full gap-40">
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
  );
};

export default Hobby;
