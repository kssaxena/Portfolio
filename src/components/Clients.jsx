import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { testimonials } from "../AllConstants/AllConstants";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Clients = () => {
  const Card = ({
    description,
    projectName,
    projectLink,
    projectLogo,
    name,
    title,
    onReadMore,
  }) => {
    return (
      <div className="h-96 w-full rounded-lg flex flex-col m-5 justify-evenly items-start select-none">
        <h1 className="stars uppercase w-full flex justify-start items-start tracking-widest text-center md:text-left">
          {title}
        </h1>
        <div className="review w-full">
          <h1 className="text-justify">"{description}"</h1>
        </div>
        <div className="flex justify-center items-center gap-10 w-full">
          <img
            src={projectLogo}
            className=" w-16 h-1w-16 rounded-full object-contain"
            alt={name}
          />
          <h1>
            <p className="p-2 flex justify-center items-center gap-5 border-b">
              {projectName}
              <span>
                <a href={projectLink} target="blank" className="text-blue-500">
                  <FaExternalLinkAlt />
                </a>
              </span>
            </p>
            <p className=" p-2">{name}</p>
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
      <div className="flex justify-between items-center ">
        <div className="text-xl lg:flex flex-col justify-around items-start w-1/3 gap-60 hidden">
          <h1 className="flex justify-center items-start ">
            <span>
              Here's what people have to say about working together. Real
              moments, real experiences, real feedback.
            </span>
            <span className="text-9xl">
              <RiDoubleQuotesR />
            </span>
          </h1>
          <div className="flex justify-center items-center gap-10">
            <button onClick={prevSlide} className="text-3xl">
              <FaChevronLeft className="text-red-500"/>
            </button>
            <button onClick={nextSlide} className="text-3xl">
              <FaChevronRight className="text-red-500"/>
            </button>
          </div>
        </div>
        <div className="overflow-hidden lg:w-1/2">
          <div>
            <div
              className="flex transition-transform duration-700 ease-in-out rounded-xl"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 w-full h-full flex justify-center items-center"
                >
                  <Card
                    key={slide.id}
                    name={slide.name}
                    title={slide.title}
                    description={slide.description}
                    projectName={slide.projectName}
                    projectLink={slide.projectLink}
                    projectLogo={slide.projectLogo}
                  />
                </div>
              ))}
            </div>
            {/* Dots  */}
            <div className="flex justify-center gap-2 my-5 lg:mt-20 ">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === current ? "bg-red-500" : "bg-[#2A2623] border"
                  }`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
            <div className="lg:hidden flex justify-center items-center gap-10 ">
              <button onClick={prevSlide} className="text-xl">
                <FaChevronLeft className="text-red-500"/>
              </button>
              <button onClick={nextSlide} className="text-xl">
                <FaChevronRight className="text-red-500"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
          Clients & Testimonials
        </h1>
      </motion.h1>
      <div className="">
        <Carousel />
      </div>
    </div>
  );
};

export default Clients;
