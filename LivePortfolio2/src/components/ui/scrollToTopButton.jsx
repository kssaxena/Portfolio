import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    // Lenis support (if available)
    console.log("Hello");
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2, easing: (t) => t });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed top-6 right-6 z-50
        h-12 w-12 rounded-full border border-neutral-700
        flex items-center justify-center
        bg-[#121111]/80 backdrop-blur
        transition-all duration-500 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-neutral-200 text-sm" />
    </button>
  );
};

export default ScrollToTopButton;
