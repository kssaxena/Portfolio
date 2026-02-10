import { Route, Routes, useLocation, useNavigate } from "react-router";
import Projects from "./pages/projects/page";
import Header from "./components/header";
import Hero from "./pages/home/page";
import Footer from "./components/footer";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import { AnimatePresence } from "framer-motion";
import { createContext, useEffect, useState } from "react";
import PageTransition from "./components/ui/loader";

export const TransitionContext = createContext(null);

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const transitionTo = (path) => {
    if (path === location.pathname) return;

    setShowOverlay(true);
    setIsExiting(false);

    // Animate IN
    setTimeout(() => {
      navigate(path);
    }, 700);

    // Animate OUT
    setTimeout(() => {
      setIsExiting(true);
    }, 700);

    // Cleanup
    setTimeout(() => {
      setShowOverlay(false);
    }, 1400);
  };

  return (
    <TransitionContext.Provider value={transitionTo}>
      <div className="relative w-full font-interRegular">
        {/* FOOTER — BACKGROUND LAYER */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Footer />
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10">
          <Header />
          {showOverlay && <PageTransition isExiting={isExiting} />}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

export default App;
