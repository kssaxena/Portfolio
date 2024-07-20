import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaGithub } from "react-icons/fa";
import ProjectImageDemo from "../assets/ProjectImageDemo.png";
import AriserTradco from "../assets/AriserTradco.png";
import ArtSchool from "../assets/ArtSchool.png";
import NotesApp from "../assets/NotesApp.png";
import LiveChat from "../assets/LiveChat.png";
import EmpowerED from "../assets/EmpowerED.png";
import {motion} from "framer-motion"

const Projects = () => {
  const Skeleton = ({ photo }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 justify-center items-center object-center ">
      <img
        src={photo}
        className="rounded-xl h-full flex justify-center items-center object-center"
      />
    </div>
  );

  const PROJECTS = [
    {
      title: "WOODZZZ CRAFT",
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ariser Tradco",
      header: <Skeleton photo={AriserTradco} />,
      description:
        "An application for Showcasing Retail Products as well as displaying it with an Interactive UI.",
      technologies:
        "HTML, CSS, Vue.js, Jsx, TypeScript, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
    {
      header: <Skeleton photo={ProjectImageDemo} />,
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
    {
      header: <Skeleton photo={EmpowerED} />,
      title: "EmpowerED",
      description:
        "This is a platform for Educators and Learners to come together. This platform provides features like Live Video conference, Live White Board , AI assistance and File sharing. ",
      technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
    {
      header: <Skeleton photo={ArtSchool} />,
      title: "Creative School of Arts",
      description:
        "A platform for creative persons to create their own creative ideas, this is an Organization who trains the best creativity out of the world.",
      technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
    {
      header: <Skeleton photo={NotesApp} />,
      title: "Notes App",
      description:
        "A platform for users to create notes for there daily list or to store there information",
      technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
    {
      header: <Skeleton photo={LiveChat} />,
      title: "Live Chat",
      description:
        "A platform for users to visit new people around online, this platform provides Live interaction between strangers to come together.",
      technologies: "HTML, CSS, Vue.js, Express, REACT, MONGOdb",
      icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        <BentoGrid className="max-w-5xl mx-auto">
          {PROJECTS.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              technology={item.technologies}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Projects;
