import React from "react";
import { Link, useLocation } from "react-router-dom";
import TransitionLink from "./TransitionLink";
import { FloatingDockMobile } from "../components/ui/floatingDock";

const Header = () => {
  const location = useLocation();

  const links = [
    { title: "© Mr_Saxena Design & Strategy", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const headerTextClass =
    location.pathname === "/" ? "text-black" : "text-neutral-100";

  return (
    <div
      className={`flex justify-between items-center w-full p-5 absolute top-0 left-0 z-50 tracking-wide bg-gradient-to-b from-black/50 to-transparent ${headerTextClass}`}
    >
      <div className="hidden w-full md:flex justify-between items-center">
        {links.map((l) => (
          <TransitionLink
            to={l.path}
            className="hover:border-b border-[#F05038] p-2 duration-100 text-white drop-shadow-2xl"
          >
            {l.title}
          </TransitionLink>
        ))}
      </div>
      <div className="md:hidden block">
        <FloatingDockMobile items={links} className="bg-transparent" />
      </div>
    </div>
  );
};

export default Header;
