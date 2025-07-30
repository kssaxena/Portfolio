import React from "react";
// import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Projects = () => {
  const PROJECTS = [
    {
      title: "Finora Billing",
      description:
        "This project is a comprehensive, production-ready billing solution designed to streamline day-to-day business operations for small to mid-sized enterprises. It offers a robust set of features including user authentication, role-based access control, product and stock management, inventory tracking, and invoice generation.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/FinoraBilling.png?updatedAt=1753900509804`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://github.com/kssaxena/Finora"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Finora Billing{" "}
              <span>
                <FaGithub className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Bindni Pvt. Ltd.",
      description:
        "Bindni is a premium portfolio website crafted for a luxury bridal wear and jewelry brand—Bindni: House of Bridal Collection Pvt. Ltd.. This project showcases the elegance and cultural richness of the brand’s offerings through a beautifully curated digital experience. The site highlights bridal collections, ethnic wear, and handcrafted jewelry, blending visual storytelling with modern web design principles.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/BindniJewel.png?updatedAt=1753900264396`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="#"
            // target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Bindni Pvt. Ltd.{" "}
              <span>
                <FaExternalLinkSquareAlt className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "A R Measure Pro",
      description:
        "AR Measure Pro is a cross-platform application built to function seamlessly across web (using React), mobile (with React Native), and simulation environments (using Unity). The application leverages a custom-trained machine learning model developed in Python, trained on a dataset of 20,000 images to identify various shapes accurately. Users can upload or capture an image, and the system automatically detects the shape and calculates dimensions such as area or length using advanced image processing techniques and AR calibration.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/ARMeasurePro.png?updatedAt=1753901663797`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://github.com/kssaxena/AR_MeasurePro"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              A R Measure Pro{" "}
              <span>
                <FaGithub className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Multi-Vendor E-commerce",
      description:
        "This project is a fully functional multivendor e-commerce platform, designed to enable multiple sellers to manage and sell their products through a single, unified marketplace. Inspired by platforms like Amazon and Flipkart, the system is equipped with vendor-specific dashboards, customer storefronts, admin controls, and a robust backend to support scalable transactions.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/Ecom.png?updatedAt=1753900510220`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://ecom.riderskart.in/"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto  duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Multi-Vendor E-commerce{" "}
              <span>
                <FaExternalLinkSquareAlt className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Rider's Kart",
      description:
        "Rider's Kart is a full-stack delivery and logistics management system inspired by platforms like Porter and Dunzo. It enables users to book delivery services, track their parcels and riders in real-time, and manage orders efficiently—making it ideal for hyperlocal courier services, last-mile delivery, and logistics-based startups.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/RiderKart.png?updatedAt=1753900510200`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://riderskart.in/"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Rider's Kart{" "}
              <span>
                <FaExternalLinkSquareAlt className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Ariser Tradco",
      description:
        "Ariser Tradco is a Ranchi based manufacturer and supplier of premium steel doors and windows, established in 2018. Officially registered under GST in January 2022, the company operates as a partnership firm. Positioned around the core philosophy of “Security Meets Grandeur,” Ariser Tradco offers high durability products tailored for both aesthetic and functional value. Their React built website delivers a modern, seamless UI that showcases their product range and facilitates customer engagement effortlessly.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/AriserTradco.png?updatedAt=1753899031163`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://arisertradco.com/"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Ariser Tradco{" "}
              <span>
                <FaExternalLinkSquareAlt className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "WOODZZZ CRAFT",
      description:
        "Woodzzz Craft is a custom-built website I developed for a handcrafted art studio based in Ranchi, India. The goal was to create a warm, artistic, and user-friendly digital presence that reflects the brand's focus on personalized wooden art and bespoke paintings. Built with responsiveness and simplicity in mind, the site allows users to explore unique creations, place custom orders, and connect with the artist directly. From design to deployment, I handled the full development process ensuring smooth navigation, fast load times, and a layout that brings the art to life online.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/Woodzzz-Craft.png?updatedAt=1753898476138`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://woodzzzcraft.com/"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              WOODZZZ CRAFT{" "}
              <span>
                <FaExternalLinkSquareAlt className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },

    {
      title: "Creative School of Arts",
      description:
        "CreativeS Art School is an art education portal crafted to inspire and guide emerging artists. Designed with a light, visually driven layout, the website features vibrant galleries, course descriptions, and easy inquiry pathways—encouraging creativity at every level. The design prioritizes accessibility and warmth, inviting users to explore, engage, and join a community of art lovers.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/ArtSchool.png?updatedAt=1753893553576`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://creativesartschool.in/"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Creative School of Arts{" "}
              <span>
                <FaExternalLinkSquareAlt className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Eval Engine",
      description:
        "It s a comprehensive solution designed to streamline the process of evaluating and managing student projects, ensuring fairness and efficiency in the grading process. This project management system is built with a focus on user-friendliness, scalability, and customization to meet the diverse needs of educators and institutions.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/EvalEngine.png?updatedAt=1753893551657`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://github.com/kssaxena/EvalEngine"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Eval Engine{" "}
              <span>
                <FaGithub className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Nova -AI Model",
      description:
        "Nova is an advanced AI model designed to streamline the process of generating test results for text-based assessments. This cutting-edge technology leverages natural language processing (NLP) and machine learning algorithms to analyze and interpret written responses, ensuring accurate and efficient results.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/NovaAIModel.png?updatedAt=1753893553047`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://github.com/kssaxena/A_I-Model"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Nova{" "}
              <span>
                <FaGithub className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "Health Tap",
      description:
        "It is online health consultation app designed to provide personalized, accessible, and convenient healthcare services to individuals and families. This cutting-edge technology aims to bridge the gap between traditional healthcare providers and patients, offering a seamless and efficient solution to healthcare needs.",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/HealthTap.png?updatedAt=1753893552687`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://github.com/kssaxena/Health-Consultation-App"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              Health Tap{" "}
              <span>
                <FaGithub className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    {
      title: "EmpowerED",
      description:
        "This is a platform for Educators and Learners to come together. This platform provides features like Live Video conference, Live White Board , AI assistance and File sharing. ",
      content: (
        <div className="flex justify-center items-center relative w-full h-full">
          <div className=" shadow-2xl shadow-black/50 bg-red-400 w-full h-full ">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/EmpowerED.png?updatedAt=1753893548129`}
              className="object-cover w-full h-full"
            />
          </div>
          <a
            href="https://github.com/vivek-krishan/EmpowerED"
            target="_blank"
            className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-300 ease-in-out hover:bg-black/60 "
          >
            <h1 className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8]  font-Cinzel tracking-widest">
              EmpowerED{" "}
              <span>
                <FaGithub className="h-4 w-4  text-blue-500" />
              </span>
            </h1>
          </a>
        </div>
      ),
    },
    // {
    //   header: <Skeleton photo={NotesApp} />,
    //   title: "Notes App",
    //   description:
    //     "A platform for users to create notes for there daily list or to store there information",
    //   technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
    //   icon: <FaGithub className="h-4 w-4 text-blue-500" />,
    // },
    // {
    //   header: <Skeleton photo={LiveChat} />,
    //   title: "Live Chat",
    //   description:
    //     "A platform for users to visit new people around online, this platform provides Live interaction between strangers to come together.",
    //   technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
    //   icon: <FaGithub className="h-4 w-4 text-blue-500 " />,
    // },
    // {
    //   header: <Skeleton photo={ProjectImageDemo} />,
    //   title: "Portfolio",
    //   description:
    //     "A personal portfolio website showcasing projects, skills, and contact information.",
    //   technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
    //   icon: <FaGithub className="h-4 w-4 text-blue-500 " />,
    // },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-agile tracking-widest uppercase bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent w-fit text-shadow-lg text-shadow-white"
      >
        Projects
      </motion.h1>
      <div className="">
        <StickyScroll content={PROJECTS} />
      </div>
    </div>
  );
};

export default Projects;
