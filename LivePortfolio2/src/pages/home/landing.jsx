import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { ContainerTextFlip } from "../../components/ui/containerFlip";
import { AnimatePresence, motion } from "framer-motion";
import { useParallax } from "../../components/hooks/ParallaxImage";
import useReactiveMarquee from "../../components/hooks/useReactiveMarquee";

const Landing = () => {
  // const marqueeRef = useRef(null);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);

  const marqueeRef = useReactiveMarquee({
    speed: 0.4,
    scrollMultiplier: 1.8,
    smoothness: 0.08,
  });

  useEffect(() => {
    const marquee = marqueeRef.current;
    const hero = heroRef.current;
    if (!marquee || !hero) return;

    // Pause initially
    marquee.style.animationPlayState = "paused";

    let lastScroll = 0;

    // Observe hero visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        marquee.style.animationPlayState = entry.isIntersecting
          ? "running"
          : "paused";
      },
      { threshold: 0.35 },
    );

    observer.observe(hero);

    // Lenis scroll listener
    const lenis = window.lenis;
    if (!lenis) return;

    lenis.on("scroll", ({ scroll }) => {
      const delta = scroll - lastScroll;

      if (delta < 0) {
        // scrolling up → reverse
        marquee.style.animationDirection = "reverse";
      } else if (delta > 0) {
        // scrolling down → normal
        marquee.style.animationDirection = "normal";
      }

      lastScroll = scroll;
    });

    return () => {
      observer.disconnect();
      lenis.off("scroll");
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="group z-40 h-[90vh] md:h-screen relative overflow-hidden "
    >
      <div ref={imageRef} className="relative overflow-hidden h-[100vh]">
        <motion.img
          src={
            "https://ik.imagekit.io/jarvisai/My_Portfolio/ChatGPT%20Image%20Feb%2011,%202026,%2005_55_46%20PM.png"
          }
          // src={
          //   "https://ik.imagekit.io/jarvisai/My_Portfolio/portfolioImage.png"
          // }
          style={{ y, scale }}
          className="w-full h-full object-cover will-change-transform absolute"
          // className="w-full h-full duration-700 ease-in-out object-cover"
        />
      </div>

      {/* <h1 className="absolute w-full h-full text-[280px] top-0 left-0 text-center text-nowrap text-black font-interBold flex justify-center items-center">
          Reach Out -
        </h1> */}
      <h1 className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center">
          <div
            ref={marqueeRef}
            className=" flex md:text-[280px] text-[120px] font-interMedium whitespace-nowrap bg-black/80 bg-clip-text mix-blend-difference tracking-tighter"
          >
            <div className="flex">
              <span className="mr-20">Kshitij Saxena -</span>
              <span className="mr-20">Kshitij Saxena -</span>
              <span className="mr-20">Kshitij Saxena -</span>
              <span className="mr-20">Kshitij Saxena -</span>
            </div>
            <div className="flex">
              <span className="mr-20">Kshitij Saxena -</span>
              <span className="mr-20">Kshitij Saxena -</span>
              <span className="mr-20">Kshitij Saxena -</span>
              <span className="mr-20">Kshitij Saxena -</span>
            </div>
          </div>
        </div>
      </h1>

      <div className="absolute w-full bottom-0 left-0 py-auto flex justify-end md:justify-between items-end p-5 ">
        <section
          className={`hidden md:flex justify-start items-start gap-2 flex-col text-black`}
        >
          <Link
            to={`https://github.com/kssaxena`}
            target="_blank"
            className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <FaGithub className="text-2xl" /> GitHub
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijsaxena9@gmail.com&su=Hello%20from%20your%20portfolio!&body=Hi%20there,%0A%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0ABest%20regards,%0A[Your%20Name]"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <BiLogoGmail className="text-2xl" /> Gmail
          </a>
          <Link
            to={`https://www.instagram.com/mr_saxena007?igsh=a3I5MWVveXBzb2Iw`}
            target="_blank"
            className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <FiInstagram className="text-2xl" /> Instagram
          </Link>
        </section>
        <div className="md:text-[72px] text-[28px] md:leading-16 text-[#F05038] md:text-black font-montserrat font-bold tracking-tighter flex flex-col justify-end items-end leading-none">
          <h1>
            <ContainerTextFlip
              words={["I.O.T", "Frontend", "Backend", "Full Stack"]}
            />
            Developer
          </h1>
          <h1>// Web Designer</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
