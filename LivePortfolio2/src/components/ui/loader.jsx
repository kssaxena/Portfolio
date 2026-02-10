import { motion } from "framer-motion";

const PageTransition = ({ isExiting }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#F05038] z-[9999]"
      initial={{ y: "100%" }}
      animate={{ y: isExiting ? "-100%" : "0%" }}
      transition={{
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
      }}
    />
  );
};

export default PageTransition;
