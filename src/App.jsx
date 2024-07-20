import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { motion, useScroll, useSpring } from "framer-motion";
// import './App.css'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="progress-bar bg-gradient-to-r from-pink-300 via-cyan-500 to-purple-500 p-[1px] fixed left-0 w-full z-50"
        style={{ scaleX }}
      />
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8 ">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
