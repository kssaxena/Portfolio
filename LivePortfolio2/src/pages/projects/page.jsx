import React, { useEffect, useRef } from "react";
import { gitProjects, PROJECTS } from "../../constants/constant";
import Footer from "../../components/footer";
import { truncateString } from "../../utils/Utility-functions";
import { Link } from "react-router-dom";

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress =
        -rect.top / (section.offsetHeight - window.innerHeight);

      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

      const maxTranslate = track.scrollWidth - window.innerWidth;

      track.style.transform = `translateX(-${
        clampedProgress * maxTranslate
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ProjectCard = ({ image, date, title, description }) => {
    // Date, title, description, image, link
    return (
      <div className="flex justify-center items-center gap-5 w-[150vh] shrink-0">
        <div className="h-[90vh] w-[60%] rounded-xl border border-gray-800 overflow-hidden">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="h-[90vh] w-[35%] rounded-xl border border-gray-800 flex flex-col gap-10 p-6">
          <p className="text-[18px] font-dmMono">({date})</p>
          <h1 className="text-[64px] font-interBold tracking-tighter">
            {title}
          </h1>
          <p className="text-[18px]">{description}</p>
        </div>
        {/* <a href="">{link}</a> */}
      </div>
    );
  };

  const ProjectTable = ({ image, date, title, description, link }) => {
    return (
      <Link
        to={link}
        target="blank"
        className="grid grid-cols-3 justify-center items-center border-b border-neutral-800 text-[18px] p-2 hover:bg-[#F05038] duration-500 ease-in-out text-neutral-400 group px-8"
      >
        <h1 className="flex gap-10 font-interBold text-white">
          {title}{" "}
          <span className="font-dmMono text-neutral-400 group-hover:text-white">
            ({date})
          </span>
        </h1>
        <h1 className="text-left truncate group-hover:text-white font-montserrat">
          {/* {truncateString(description, 30)} */}
          {description}
        </h1>
        <div className="flex justify-end">
          <div className="h-14 w-14 rounded-xl border border-gray-800 overflow-hidden">
            <img src={image} className="w-full h-full object-cover" />
          </div>{" "}
        </div>
      </Link>
    );
  };

  return (
    <div>
      <section className="bg-[#121111] min-h-screen text-neutral-200 z-50 shadow-2xl shadow-black">
        {/* Title */}
        <div className="text-[120px] font-interBold py-56 h-[55vh]">
          Work Index
        </div>

        {/* Horizontal Scroll Area */}
        <div ref={sectionRef} className=" h-[300vh] z-20">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#121111]">
            <div ref={trackRef} className="flex gap-20 will-change-transform">
              {PROJECTS?.map((data) => (
                <ProjectCard
                  key={data.id}
                  date={data.date}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-40 border-t border-gray-800 pt-5 text-[#F05038] text-[18px] font-interBold">
          <h1>// Old projects</h1>
          <div>
            {gitProjects?.map((data) => (
              <ProjectTable
                key={data.id}
                date={data.date}
                image={data.image}
                title={data.title}
                link={data?.link}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="h-screen bg-transparent" />
    </div>
  );
};

export default Projects;
