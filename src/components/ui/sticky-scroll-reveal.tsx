"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#00000000",
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
    "#1e293b", // slate-800
    "#111827", // gray-900
    "#0d1117", // GitHub dark background
    "#1a1a1a", // dark gray, almost black
    "#101010", // ultra dark neutral
    "#1f1f1f", // VS Code editor dark
    "#202124", // Google dark mode
    "#1c1c1e", // iOS system dark background
    "#2d2d2d", // carbon gray
    "#00000000",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-32 overflow-y-auto rounded-2xl p-10 items-start no-scrollbar inset-shadow-sm shadow-black select-none"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 w-1/2 justify-center ">
        <div className=" w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 ">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 font-agile tracking-widest"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 text-slate-300 indent-8 text-justify "
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
        <h1 className="bg-red-400 w-fit">
          {activeCard + 1} / {cardLength}
        </h1>
      </div>
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-20 hidden h-60 w-96 overflow-hidden rounded-md lg:flex lg:flex-col lg:items-center lg:justify-center hover:text-white",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      {/* <div className="mt-4 text-center text-white text-sm font-medium"></div> */}
    </motion.div>
  );
};
