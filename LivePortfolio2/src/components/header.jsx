import React from "react";
import { Link, useLocation } from "react-router-dom";
import TransitionLink from "./TransitionLink";

const Header = () => {
  const location = useLocation();

  const links = [
    { title: "© Mr_Saxena Design & Strategy", url: "/" },
    { title: "Projects", url: "/projects" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const headerTextClass =
    location.pathname === "/" ? "text-black" : "text-neutral-100";

  return (
    <div
      className={`flex justify-between items-center w-full p-5 absolute ${headerTextClass} top-0 left-0 z-50 tracking-wide`}
    >
      {/* <p>© Mr_Saxena Design & Strategy</p> */}
      {links.map((l) => (
        <TransitionLink
          to={l.url}
          className="hover:border-b border-[#F05038] p-2 duration-100"
        >
          {l.title}
        </TransitionLink>
      ))}
    </div>
  );
};

export default Header;
