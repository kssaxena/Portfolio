import React from "react";

const Button = ({ Label = "", onClick, className = "", type }) => {
  const letters = Label.toUpperCase().split("_"); // for typewritter effect remove the underscore 

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden uppercase px-8 py-4 transition-transform duration-300 ease-in-out group hover:border cursor-pointer ${className}`}
    >
      {/* Default Layer */}
      <div className="absolute inset-0 grid place-content-center bg-transparent transition-transform duration-300 ease-in-out group-hover:translate-y-full border-b border-t">
        {Label}
      </div>

      {/* Animated Letters */}
      <div className="inline-flex text-white relative z-10">
        {letters.map((char, i) => (
          <span
            key={i}
            className="opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </button>
  );
};

export default Button;