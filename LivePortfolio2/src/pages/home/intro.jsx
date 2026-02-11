import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollRevealText from "../../components/ui/ScrollTextColor";
import Button from "../../components/ButtonWrapper";

const Intro = () => {
  return (
    <div className="flex flex-col justify-end items-start md:gap-36 gap-10 border-t border-gray-800 py-10 px-5 text-neutral-200 text-[18px] relative">
      <h1 className="text-[#F05038] sticky top-0 left-0">// Intro</h1>
      <div className="w-full flex justify-end items-start md:items-end flex-col md:gap-20 gap-10">
        <ScrollRevealText
          className="text-[28px] md:text-[72px] leading-[1.1] md:w-[90%]"
          textParts={[
            { text: "I'm a versatile", color: "white" },
            { text: "designer who partners with founders", color: "red" },
            { text: "to turn ideas into", color: "white" },
            { text: "real products.", color: "red" },
            { text: "I focus on clear interfaces,", color: "white" },
            { text: "sharp decisions,", color: "red" },
            { text: "and fast execution.", color: "white" },
          ]}
        />
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
          className="md:max-w-96 w-3/4 text-[14px] md:text-[18px] md:mr-40 indent-8"
        >
          Bringing your vision to life quickly and efficiently—whether it's
          branding, apps, or websites—I've got it covered, delivering smooth and
          effective solutions from start to finish.
        </motion.h1>
        <Button Label="see my work" className="mr-40 text-[14px]" />
      </div>
    </div>
  );
};

export default Intro;
