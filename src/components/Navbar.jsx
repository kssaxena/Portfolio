import React from "react";
// import Mr_saxena_logo from "../assets/Mr_saxena_logo.png";
// import { Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-10 flex justify-between items-center py-3">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-shrink-0 items-center"
      >
        <img
          src={`https://ik.imagekit.io/jarvisai/My_Portfolio/Mr_saxena_logo.png?updatedAt=1753893555054`}
          alt="logo"
          className="rounded-full w-[6vw]"
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <Link
          to={`https://www.instagram.com/mr_saxena007?igsh=a3I5MWVveXBzb2Iw`}
          target="_blank"
          className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FiInstagram className="text-2xl text-red-500" />
        </Link>
        <Link
          to={`https://www.facebook.com/profile.php?id=100006677474839&mibextid=ZbWKwL`}
          target="_blank"
          className="rounded-2xl p-2 hover:-translate-x-2 duration-300 ease-in-out"
        >
          <FaFacebookF className="text-2xl text-cyan-500" />
        </Link>
        <Link
          to={`https://github.com/kssaxena`}
          target="_blank"
          className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaGithub className="text-2xl text-white" />
        </Link>
        <Link
          to={`https://www.linkedin.com/in/kshitij-saxena-16baa5261/`}
          target="_blank"
          className="rounded-2xl p-2 hover:translate-x-2 duration-300 ease-in-out"
        >
          <FaLinkedinIn className="text-2xl text-blue-500" />
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijsaxena9@gmail.com&su=Hello%20from%20your%20portfolio!&body=Hi%20there,%0A%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0ABest%20regards,%0A[Your%20Name]"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <BiLogoGmail className="text-2xl text-red-500" />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
