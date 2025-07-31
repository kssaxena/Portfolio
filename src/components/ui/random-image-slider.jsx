import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RandomImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const getRandomIndex = (excludeIndex) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === excludeIndex);
    return newIndex;
  };

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => getRandomIndex(prev));
    }, 2000);
  };

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // const goToNext = () => {
  //   stopSlider();
  //   setCurrentIndex((prev) => getRandomIndex(prev));
  //   startSlider();
  // };

  // const goToPrevious = () => {
  //   stopSlider();
  //   setCurrentIndex((prev) => getRandomIndex(prev));
  //   startSlider();
  // };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto h-full overflow-hidden rounded-xl shadow-lg"
      // onMouseEnter={() => {
      //   setIsHovered(true);
      //   stopSlider();
      // }}
      // onMouseLeave={() => {
      //   setIsHovered(false);
      //   startSlider();
      // }}
    >
      <AnimatePresence mode="wait">
        {/* <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover absolute top-0 left-0 rounded-xl"
        /> */}
        <motion.img
          // key={images[currentIndex]}
          // src={images[currentIndex]}
          // alt="Slide"
          // className="w-full h-full object-cover absolute top-0 left-0 rounded-xl"
          // initial={{ opacity: 0, scale: 1.05 }}
          // animate={{ opacity: 1, scale: 1 }}
          // exit={{ opacity: 0, scale: 0.95 }}
          // transition={{ duration: 0.8 }}
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover absolute top-0 left-0 rounded-xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>

      {/* Arrows */}
      {/* {isHovered && (
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2  text-black p-2 rounded-full hover:bg-opacity-70 transition"
            onClick={goToPrevious}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black  p-2 rounded-full hover:bg-opacity-70 transition"
            onClick={goToNext}
          >
            <FaChevronRight size={24} />
          </button>
        </>
      )} */}
    </div>
  );
};

export default RandomImageSlider;
