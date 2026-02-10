import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../../components/ButtonWrapper";
import TechStack from "./techStack";
import ScrollRevealText from "../../components/ui/ScrollTextColor";
import { useParallax } from "../../components/hooks/ParallaxImage";
import Hobby from "./hobby";
import Facts from "./facts";

const About = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);

  const imageRef2 = useRef(null);
  const { y: y2, scale: scale2 } = useParallax(imageRef2);

  return (
    <div>
      <div className="h-fit bg-[#121111] shadow-2xl shadow-black">
        <div className="px-8 pt-[50vh]  text-neutral-400 flex flex-col justify-end items-center z-40 relative">
          <h1 className="text-[52px] leading-[1.1] tracking-tighter font-interBold h-full flex justify-end items-end w-full text-end text-neutral-300">
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. with in past years of hands on
            experience, I have honed my skills in front-end technologies like
            React and Next.js, as well as back end technologies like Node.js,
            MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise
            to create innovative solutions that drive business growth and
            deliver exceptional user experiences.
          </h1>
          <div className="flex p-20 justify-start items-start gap-40">
            <h1 className="w-[42rem] indent-14">
              I am a dedicated and versatile full stack developer with a passion
              for creating efficient and user-friendly web applications. With
              past year experience, I have worked with a variety of
              technologies, including React, Next.js, Node.js, MySQL, and
              MongoDB. My journey in web development began with a deep curiosity
              for how things work, and it has evolved into a career where I
              continuously strive to learn and adapt to new challenges. I thrive
              in collaborative environments and enjoy solving complex problems
              to deliver high-quality solutions. Outside of coding, I enjoy
              staying active, exploring new technologies, and contributing to
              open-source projects.
            </h1>
            <Button Label="Let's Talk" />
          </div>
        </div>
        <div ref={imageRef} className="relative overflow-hidden h-[95vh]">
          <motion.img
            src="https://ik.imagekit.io/jarvisai/My_Portfolio/ChatGPT%20Image%20Feb%2010,%202026,%2012_14_40%20PM.png"
            style={{ y, scale }}
            className="w-full h-full object-cover will-change-transform absolute"
            alt="About portrait"
          />
          <div className="bg-black/5 w-full h-full absolute flex justify-end items-center">
            <ScrollRevealText
              className="text-[52px] leading-[1.1] w-[60%] font-interBold"
              textParts={[
                { text: "Distinctive design for brands", color: "white" },
                { text: "with taste -- built to stand", color: "red" },
                { text: "apart", color: "white" },
                { text: "in a world of", color: "red" },
                { text: "sameness .", color: "white" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-36 border-t border-gray-800 py-10 px-5 text-neutral-200 text-[18px] relative">
          <h1 className="text-[#F05038] sticky top-0 left-0 w-full">
            // Tech Stack
          </h1>
          <TechStack />
        </div>
        <div className="flex flex-col justify-center items-center gap-36 border-t border-gray-800 py-10 px-5 text-neutral-200 text-[18px] relative">
          <h1 className="text-[#F05038] sticky top-0 left-0 w-full">
            // Hobby
          </h1>
          <div className="w-full flex justify-end">
            <ScrollRevealText
              className="text-[52px] leading-[1.1] w-[70%] font-interBold"
              textParts={[
                { text: "Photography and coding are", color: "white" },
                { text: "more than hobbies", color: "red" },
                { text: "-- they shape how I observe,", color: "white" },
                { text: "build, and express ideas.", color: "red" },
                { text: "Through the lens and the editor,", color: "white" },
                { text: "I capture moments,", color: "red" },
                { text: "solve problems,", color: "white" },
                { text: "and turn curiosity into craft.", color: "red" },
              ]}
            />
          </div>
          <Hobby />
        </div>
        {/* SECOND PARALLAX IMAGE */}
        <div ref={imageRef2} className="relative overflow-hidden h-[95vh]">
          <motion.img
            src="https://ik.imagekit.io/jarvisai/My_Portfolio/ChatGPT%20Image%20Feb%2010,%202026,%2007_31_58%20PM.png"
            style={{ y: y2, scale: scale2 }}
            className="w-full h-full object-cover absolute will-change-transform"
            alt="Second parallax portrait"
          />

          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <ScrollRevealText
              className="text-[52px] leading-[1.1] w-[60%] font-interBold"
              textParts={[
                { text: "Engineering solutions", color: "white" },
                { text: "that scale", color: "red" },
                { text: "with clarity,", color: "white" },
                { text: "performance,", color: "red" },
                { text: "and intent.", color: "white" },
              ]}
            />
          </div>
        </div>
        <Facts />
        <div className="py-20 flex justify-center items-center w-full gap-10 flex-col">
          <h1 className="text-[#F05038] sticky top-0 left-0 w-full text-[18px] px-5">
            // Contribution Graph
          </h1>
          <ScrollRevealText
            className="text-[52px] leading-[1.1] w-[60%] font-interBold"
            textParts={[
              { text: "Consistent progress,", color: "white" },
              { text: "measured in commits", color: "red" },
              { text: "— showing how ideas evolve", color: "white" },
              { text: "into reliable code,", color: "red" },
              { text: "one day at a time.", color: "white" },
            ]}
          />
          <img
            src="https://ghchart.rshah.org/d15da7/kssaxena"
            alt="GitHub Contributions"
            className="w-3/4 invert"
          />
        </div>
      </div>
      <div className="h-screen bg-transparent" />
    </div>
  );
};

export default About;
