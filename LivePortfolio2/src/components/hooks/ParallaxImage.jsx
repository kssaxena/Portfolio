import { useScroll, useTransform } from "framer-motion";

export const useParallax = (ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return { y, scale };
};
