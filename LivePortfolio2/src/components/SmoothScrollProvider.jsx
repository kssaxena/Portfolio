import { useEffect, useRef } from "react";
// import { createLenis, setLenis } from "@/lib/lenis";
import { createLenis, setLenis } from "../lib/lenis";

export default function SmoothScrollProvider({ children }) {
  const rafRef = useRef(null);

  useEffect(() => {
    const lenis = createLenis({
      // === TUNE YOUR SPEED HERE ===
      // Option A: duration-based feel (consistent “time to settle”)
      duration: 1.8, // try values 0.7–1.5 (lower = snappier, higher = slower)
      // Option B: lerp-based feel (comment duration above, uncomment below)
      // lerp: 0.08,

      wheelMultiplier: 0.9, // 0.6 (slower) … 2.0 (faster)
      touchMultiplier: 1.0,
    });

    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    // Accessibility: respect reduced motion (optional)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      lenis.stop(); // or set very low duration/lerp
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return children;
}
