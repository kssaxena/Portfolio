import { Route, Routes } from "react-router";
import Projects from "./pages/projects/page";
import Header from "./components/header";
import Hero from "./pages/home/page";
import Footer from "./components/footer";

function App() {
  return (
    <div className="relative w-full font-interRegular">
      {/* FOOTER — BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Footer />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10">
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
