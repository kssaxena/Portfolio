import React from "react";
import InputBox from "../../components/InputWrapper";
import Button from "../../components/ButtonWrapper";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#121111] text-neutral-200 z-40 shadow-2xl shadow-black min-h-screen py-48 flex flex-col w-full justify-end items-end">
      <h1 className="text-[120px] font-interBold leading-none w-full">
        <span className="text-[#F05038]">Reach</span> <br /> Out
      </h1>
      <div className="flex justify-end items-end w-[60%] flex-col">
        <h1 className="w-full text-[40px] font-interBold leading-none">
          Tell me about your idea. <br /> I’ll take it from there.
        </h1>
        <form className="w-full pr-5">
          <InputBox Placeholder="Your name" />
          <InputBox Placeholder="Job title" />
          <InputBox Placeholder="Email" />
          <InputBox Placeholder="Comments" />
          <Button Label="Send message" className="m-10" />
        </form>
        <div className="w-full py-auto flex justify-start items-end p-5 ">
          <section className={`flex justify-start items-start gap-2 flex-col`}>
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
    </div>
  );
};

export default Contact;
