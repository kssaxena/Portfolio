import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * textParts example:
 * [
 *   { text: "I'm a versatile", color: "white" },
 *   { text: "designer who partners with founders", color: "red" },
 *   { text: "to turn ideas into", color: "white" },
 *   { text: "real products.", color: "red" }
 * ]
 */

const ScrollRevealText = ({
  textParts,
  className = "",
  mutedColor = "rgba(255,255,255,0.15)",
  redColor = "#ff5533",
  whiteColor = "#ffffff",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  let wordIndex = 0;

  return (
    <p
      ref={ref}
      className={`flex flex-wrap justify-start items-start flex-row tracking-tighter ${className}`}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {textParts.map((part, partIndex) =>
        part.text.split(" ").map((word) => {
          const delay = wordIndex * 0.04;
          wordIndex++;

          const finalColor = part.color === "red" ? redColor : whiteColor;

          return (
            <motion.span
              key={`${partIndex}-${wordIndex}`}
              initial={{ color: mutedColor }}
              animate={{ color: isInView ? finalColor : mutedColor }}
              transition={{
                delay,
                // duration: 0.6,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          );
        }),
      )}
    </p>
  );
};

export default ScrollRevealText;
