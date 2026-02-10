import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const links = [
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
      <p>© Mr_Saxena Design & Strategy</p>
      {links.map((l) => (
        <a href={l.url}>{l.title}</a>
      ))}
    </div>
  );
};

export default Header;
