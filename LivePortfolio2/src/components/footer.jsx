import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTopButton from "./ui/scrollToTopButton";
import useReactiveMarquee from "./hooks/useReactiveMarquee";
import { useParallax } from "./hooks/ParallaxImage";

const Footer = () => {
  // const marqueeRef = useRef(null);
  const footerRef = useRef(null);
  const imageRef = useRef(null);
  const { minusY, scale } = useParallax(imageRef);

  const marqueeRef = useReactiveMarquee({
    speed: 0.4,
    scrollMultiplier: 1.8,
    smoothness: 0.08,
  });

  useEffect(() => {
    const marquee = marqueeRef.current;
    const footer = footerRef.current;
    if (!marquee || !footer) return;

    // Pause initially
    marquee.style.animationPlayState = "paused";

    let lastScroll = 0;

    // Observe footer visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        marquee.style.animationPlayState = entry.isIntersecting
          ? "running"
          : "paused";
      },
      { threshold: 0.35 },
    );

    observer.observe(footer);

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
      ref={footerRef}
      className="group z-50 h-screen relative overflow-hidden"
    >
      {/* <ScrollToTopButton /> */}
      <div ref={imageRef} className="relative overflow-hidden h-[100vh]">
        <motion.img
          src={
            "https://ik.imagekit.io/jarvisai/My_Portfolio/ChatGPT%20Image%20Feb%2011,%202026,%2005_55_46%20PM.png"
          }
          // src={
          //   "https://ik.imagekit.io/jarvisai/My_Portfolio/portfolioImage.png"
          // }
          style={{ minusY, scale }}
          className="w-full h-full object-cover will-change-transform absolute"
          // className="w-full h-full duration-700 ease-in-out object-cover"
        />
      </div>
      {/* <div className="overflow-hidden h-full ">
        <img
          src={
            "https://ik.imagekit.io/jarvisai/My_Portfolio/portfolioImage.png"
          }
          className="w-full h-full duration-700 ease-in-out group-hover:scale-150 object-cover"
        />
      </div> */}
      {/* <h1 className="absolute w-full h-full text-[280px] top-0 left-0 text-center text-nowrap text-black font-interBold flex justify-center items-center">
        Reach Out -
      </h1> */}
      <h1 className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center">
          <div
            ref={marqueeRef}
            className=" flex md:text-[280px] text-[120px] font-interBold whitespace-nowrap mix-blend-difference font-interMedium text-white tracking-tighter"
          >
            <div className="flex">
              <span className="mr-20">Reach Out -</span>
              <span className="mr-20">Reach Out -</span>
              <span className="mr-20">Reach Out -</span>
              <span className="mr-20">Reach Out -</span>
            </div>
            <div className="flex">
              <span className="mr-20">Reach Out -</span>
              <span className="mr-20">Reach Out -</span>
              <span className="mr-20">Reach Out -</span>
              <span className="mr-20">Reach Out -</span>
            </div>
          </div>
        </div>
      </h1>
      <div className="absolute w-full bottom-0 left-0 py-auto flex justify-start items-end p-5 z-40">
        <section
          className={`hidden md:flex justify-start items-start gap-2 flex-col`}
        >
          <Link
            to={`https://www.instagram.com/mr_saxena007?igsh=a3I5MWVveXBzb2Iw`}
            target="_blank"
            className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <FiInstagram className="text-2xl" /> Instagram
          </Link>
          <Link
            to={`https://www.facebook.com/profile.php?id=100006677474839&mibextid=ZbWKwL`}
            target="_blank"
            className="rounded-2xl p-2 hover:-translate-x-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <FaFacebookF className="text-2xl" /> Facebook
          </Link>
          <Link
            to={`https://github.com/kssaxena`}
            target="_blank"
            className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <FaGithub className="text-2xl" /> GitHub
          </Link>
          <Link
            to={`https://www.linkedin.com/in/kshitij-saxena-16baa5261/`}
            target="_blank"
            className="rounded-2xl p-2 hover:translate-x-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <FaLinkedinIn className="text-2xl" /> LinkedIn
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijsaxena9@gmail.com&su=Hello%20from%20your%20portfolio!&body=Hi%20there,%0A%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0ABest%20regards,%0A[Your%20Name]"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out flex justify-center items-center gap-5"
          >
            <BiLogoGmail className="text-2xl" /> Gmail
          </a>
        </section>
      </div>
    </div>
  );
};

export default Footer;
