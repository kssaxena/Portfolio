import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import { testimonials } from "../../constants/constant";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import ScrollRevealText from "../../components/ui/ScrollTextColor";

const Testimonials = () => {
  const splitDescriptionToParts = (text) => {
    const words = text.split(" ");
    const mid = Math.floor(words.length / 2);

    return [
      { text: words.slice(0, mid).join(" "), color: "white" },
      { text: words.slice(mid).join(" "), color: "red" },
    ];
  };

  const Card = ({
    description,
    projectName,
    projectLink,
    projectLogo,
    name,
    title,
    onReadMore,
    post,
  }) => {
    return (
      <div className="h-fit w-96 md:w-full rounded-lg flex flex-col md:m-5 justify-evenly items-start select-none gap-5 p-5">
        {/* DESCRIPTION */}
        <ScrollRevealText
          textParts={splitDescriptionToParts(description)}
          className="text-[24px] md:text-[52px] leading-[1.1] tracking-tighter text-justify text-wrap"
        />

        {/* AUTHOR */}
        <div className="flex justify-start items-start w-full">
          <h1 className="text-[18px]">
            <p>// {name}</p>
            <p className="text-neutral-500 indent-4">
              {post}, {projectName}
            </p>
          </h1>
        </div>
      </div>
    );
  };

  const Carousel = () => {
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };
    const [current, setCurrent] = useState(0);
    const totalSlides = testimonials.length;

    return (
      <div className="flex flex-col md:flex-row justify-end items-start w-full md:gap-20 overflow-hidden">
        <span className="text-neutral-400 font-dmMono">
          {current + 1}/<span className="text-[#ff5533]">{totalSlides}</span>
        </span>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out rounded-xl md:w-[130vh] w-[100vh]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full h-full flex md:justify-center justify-start items-center text-wrap"
              >
                <Card
                  key={slide.id}
                  name={slide.name}
                  title={slide.title}
                  post={slide.post}
                  description={slide.description}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectLogo={slide.projectLogo}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex flex-row md:flex-col justify-center items-center gap-2 my-5 lg:mt-20">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                className={`md:h-16 h-10 md:w-16 w-10 rounded-full border overflow-hidden flex items-center justify-center
        ${
          index === current
            ? "border-red-500 border-4 p-2 duration-300 ease-in-out"
            : "bg-[#2A2623] border-neutral-700 duration-300 ease-in-out"
        }`}
              >
                <img
                  src={item.projectLogo}
                  alt={item.projectName}
                  className={`w-full h-full object-contain rounded-full ${
                    index === current ? "grayscale-0" : "grayscale-80"
                  }`}
                />
                {/* {index === current && (
                )} */}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-start items-start md:gap-36 gap-10 border-t border-gray-800 py-10 px-5 text-neutral-200 text-[18px] relative md:min-h-screen">
      <h1 className="text-[#F05038] sticky top-0 left-0">// Testimonials</h1>
      <Carousel />
      <div className="flex w-full justify-evenly items-center border-t pt-5 -px-5">
        {testimonials.map((item) => (
          <div className="h-16 w-full flex justify-center items-center">
            <img
              src={item.projectLogo}
              className="h-full w-fit object-contain grayscale-100 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
