import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RandomImageSlider = ({ images, direction = "rightToLeft" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  // Determine animation direction
  const isLeftToRight = direction === "leftToRight";
  const enterX = isLeftToRight ? -100 : 100;
  const exitX = isLeftToRight ? 100 : -100;

  return (
    <div className="relative w-full max-w-3xl mx-auto h-full overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover absolute top-0 left-0 rounded-xl"
          initial={{ opacity: 0, x: enterX }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: exitX }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default RandomImageSlider;
