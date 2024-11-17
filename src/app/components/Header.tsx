"use client";
// components/Header.tsx
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

const Header: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <header
      className="relative min-h-screen flex flex-col items-end justify-between text-right bg-white text-black px-4 sm:px-8 md:px-10 pt-8 sm:pt-12 md:pt-16 pb-16"
      onMouseMove={handleMouseMove}
    >
      <motion.img
        src="/me.svg"
        className="w-[200px] sm:w-[250px] md:w-[300px] h-auto"
        alt="Profile"
      />
      <motion.h1
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-snug"
      >
        INIOBONG UKPONG IS A HIGHLY SKILLED FULL-STACK DEVELOPER WITH A PASSION
        FOR BUILDING INNOVATIVE AND USER-FRIENDLY WEB AND MOBILE APPLICATIONS.
      </motion.h1>
      {hovered && (
        <motion.img
          src="/me.png"
          alt="Hover effect"
          className="absolute pointer-events-none w-[100px] sm:w-[150px] md:w-[250px] h-auto"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      )}
    </header>
  );
};

export default Header;
