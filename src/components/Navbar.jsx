import React from "react";
import Mr_saxena_logo from "../assets/Mr_saxena_logo.png";
import { Linkedin, Facebook, Instagram, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-3">
      <div className="flex flex-shrink-0 items-center">
        <img src={Mr_saxena_logo} alt="logo" className="rounded-full w-[6vw]" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Linkedin/>
        <Facebook/>
        <Instagram/>
        <Github/>
      </div>
    </nav>
  );
};

export default Navbar;
