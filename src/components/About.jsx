// import Mr_saxena_logo from "../assets/Mr_saxena_logo.png";
import { ABOUT_TEXT } from "../AllConstants/AllConstants";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { TiCamera } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
import RandomImageSlider from "./ui/random-image-slider";
import { galleryBannerImages, projectUrls } from "../AllConstants/AllConstants";
import { AiFillInstagram } from "react-icons/ai";
import { PieChart } from "@mui/x-charts/PieChart";
import { FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAmazonaws,
  SiGooglecloud,
  SiGit,
  SiHtml5,
} from "react-icons/si";
import { IconCloud } from "./ui/icon-cloud";

const About = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const GlobeImage = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const Image = [
    {
      id: "0",
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1721488798/Portfolio/photo_jv2aiq.jpg",
    },
  ];
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

  const pieData = [
    {
      id: "JavaScript",
      value: 15,
      color: "#F7DF1E",
      label: <SiJavascript />,
    },
    {
      id: "TypeScript",
      value: 10,
      color: "#3178C6",
      label: <SiTypescript />,
    },
    {
      id: "React",
      value: 12,
      color: "#61DBFB",
      label: <SiReact />,
    },
    {
      id: "Redux",
      value: 6,
      color: "#764ABC",
      label: <SiRedux />,
    },
    {
      id: "Next.js",
      value: 7,
      color: "#AAAAAA",
      label: <SiNextdotjs />,
    },
    {
      id: "Node.js",
      value: 10,
      color: "#3C873A",
      label: <SiNodedotjs />,
    },
    {
      id: "Express",
      value: 5,
      color: "#888888",
      label: <SiExpress />,
    },
    {
      id: "Tailwind CSS",
      value: 5,
      color: "#38BDF8",
      label: <SiTailwindcss />,
    },
    {
      id: "MongoDB",
      value: 5,
      color: "#47A248",
      label: <SiMongodb />,
    },
    {
      id: "MySQL",
      value: 4.1, // strictly > 4
      color: "#00758F",
      label: <SiMysql />,
    },
    {
      id: "PostgreSQL",
      value: 4.5,
      color: "#336791",
      label: <SiPostgresql />,
    },
    {
      id: "AWS",
      value: 6,
      color: "#FF9900",
      label: <SiAmazonaws />,
    },
    {
      id: "Google Cloud",
      value: 4.2,
      color: "#4285F4",
      label: <SiGooglecloud />,
    },
    {
      id: "Git",
      value: 5,
      color: "#F05032",
      label: <SiGit />,
    },
    {
      id: "HTML/CSS (W3C)",
      value: 5,
      color: "#E34C26",
      label: <SiHtml5 />,
    },
  ];

  const TimeLineData = [
    //education
    {
      title: "Education",
      icon: <FaSchool />,
      icon2: <IoSchool />,
      content: (
        <div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-normal text-neutral-800 dark:text-neutral-400 text-justify indent-8 lg:flex hidden"
          >
            My education background includes a recent Bachelor's degree , where
            I graduated with Bachelor's in Computer Science & Technologies.
            During my time there, I developed a strong foundation in Web
            Development, Algorithms, and Data Structures.
          </motion.p>
          <div className="grid lg:grid-cols-2 lg:gap-4 gap-2 select-none">
            <div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              width={500}
              height={500}
              className="flex justify-center items-end flex-col font-palisade lg:text-4xl text-2xl border p-5 gap-5 rounded-xl"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full "
              >
                {" "}
                <span className="font-bold">
                  Bachelor's in Computer Science & Technologies
                </span>{" "}
                <br />
                from
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Usha Martin University
              </motion.p>
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="lg:flex justify-center items-end flex-col font-palisade text-2xl  p-5 gap-5 rounded-xl hidden"
            ></div>
            <div
              width={500}
              height={500}
              className="flex justify-center items-end flex-col font-palisade lg:text-4xl text-2xl border p-5 gap-5 rounded-xl"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full "
              >
                {" "}
                <span className="font-bold">
                  Senior Secondary Education
                </span>{" "}
                <br />
                from
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                St. Xavier's College
              </motion.p>
              {/* <p>-Ranchi</p> */}
            </div>
            <div
              width={500}
              height={500}
              className="flex justify-center items-end flex-col font-palisade lg:text-4xl text-2xl border p-5 gap-5 rounded-xl"
            >
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full "
              >
                {" "}
                <span className="font-bold">Secondary Education</span> <br />
                from
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Bridgeford School
              </motion.p>
              {/* <p>-Ranchi</p> */}
            </div>
          </div>
        </div>
      ),
    },
    //skills
    {
      title: "Skills",
      icon: <FaCode />,
      icon2: <TiCamera />,
      icon3: <FaPaintbrush />,
      content: (
        <div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="lg:block hidden mb-8 font-normal text-neutral-800 dark:text-neutral-400 text-justify indent-8 text-sm lg:text-base"
          >
            I blend my passion for{" "}
            <span className="font-bold lg:text-lg">Painting</span> and{" "}
            <span className="font-bold lg:text-lg">Photography</span> with
            strong skills in{" "}
            <span className="font-bold lg:text-lg">
              Full Stack Web Development
            </span>
            . My GitHub showcases projects built with the MERN stack, including
            user authentication systems, REST APIs, and real-time web apps. This
            mix of creativity and code allows me to build visually engaging and
            technically sound digital solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-6 gap-4">
            {/* Large Image - Left */}
            <div className="md:row-span-4">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center relative w-full md:h-full h-72 overflow-hidden rounded-xl"
              >
                <div className="shadow-2xl shadow-black/50 w-full h-full">
                  <RandomImageSlider
                    images={galleryBannerImages}
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
                      <AiFillInstagram className="h-4 w-4 text-red-500" />
                    </span>
                  </motion.h1>
                </a>
              </motion.div>
            </div>

            {/* Pie Chart - Right Bottom */}
            <div className="row-span-4 col-start-2 row-start-3 hidden lg:flex">
              <motion.div
                variants={chartVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                className="flex justify-center items-center h-full w-full "
              >
                <IconCloud  images={GlobeImage} />
                {/* <PieChart
                  series={[
                    {
                      data: pieData,
                      innerRadius: 25,
                      paddingAngle: 2,
                      cornerRadius: 4,
                      startAngle: -100,
                    },
                  ]}
                  hideLegend={true}
                /> */}
              </motion.div>
            </div>

            {/* GitHub Image - Right Top */}
            <div className="md:row-span-2 md:col-start-2 md:row-start-1">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center relative w-full md:h-full h-72 overflow-hidden rounded-xl"
              >
                <div className="shadow-2xl shadow-black/50 w-full h-full">
                  <RandomImageSlider images={projectUrls} />
                </div>
                <a
                  href="https://github.com/kssaxena"
                  target="_blank"
                  className="absolute w-full h-full top-0 left-0 py-auto hover:scale-150 duration-700 ease-in-out hover:bg-black/60 tracking-widest hover:tracking-[0.5rem]"
                >
                  <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                    className="text- h-full drop-shadow-2xl w-full flex justify-center items-center bg-black/40 text-[#DEDFD8] font-Cinzel uppercase"
                  >
                    github
                    <span>
                      <FaGithub className="h-4 w-4 text-blue-900" />
                    </span>
                  </motion.h1>
                </a>
              </motion.div>
            </div>

            {/* Empty Space / Future Content */}
            <div className="md:row-span-2 md:row-start-5 lg:block hidden">
              <div className="w-20 h-40"></div>
            </div>
          </div>
        </div>
      ),
    },
    // changelog
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className=" h-full text-white">
    //         {/* <Radar data={dataRadar} className="  w-1/2" /> */}
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="lg:my-20 my-10 text-center text-4xl font-agile bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent w-fit uppercase tracking-widest"
      >
        About
      </motion.h2>
      <div className="lg:flex flex-wrap justify-center items-center hidden">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-center">
            <p className="my-2 max-w-xl py-6 font-light indent-8 text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={`https://ik.imagekit.io/jarvisai/My_Portfolio/My_Photographs/Screenshot%202025-07-31%20at%205.39.36%E2%80%AFPM.png?updatedAt=1753963920513`}
              className="rounded-xl lg:w-3/4"
              alt="about_logo"
            />
          </div>
        </motion.div>
      </div>
      <div>
        <Timeline data={TimeLineData} />
      </div>
    </div>
  );
};

export default About;
