import { useEffect, useRef } from "react";

const useReactiveMarquee = ({
  baseSpeed = 0.5,
  scrollMultiplier = 1.5,
  friction = 0.92,
} = {}) => {
  const marqueeRef = useRef(null);
  const position = useRef(0);
  const velocity = useRef(0);
  const lastScroll = useRef(0);
  const contentWidth = useRef(0);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const el = marqueeRef.current;

    // Measure real width
    contentWidth.current = el.scrollWidth / 2;

    const handleScroll = () => {
      const current = window.scrollY;
      velocity.current += current - lastScroll.current;
      lastScroll.current = current;
    };

    const animate = () => {
      // Always move
      position.current -= baseSpeed;

      // Add scroll velocity
      position.current -= velocity.current * scrollMultiplier * 0.04;

      // Smooth decay
      velocity.current *= friction;

      // Seamless loop using real width
      if (position.current <= -contentWidth.current) {
        position.current += contentWidth.current;
      }

      if (position.current >= 0) {
        position.current -= contentWidth.current;
      }

      el.style.transform = `translateX(${position.current}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [baseSpeed, scrollMultiplier, friction]);

  return marqueeRef;
};

export default useReactiveMarquee;
