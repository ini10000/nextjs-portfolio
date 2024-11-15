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
      className="relative min-h-screen flex flex-col items-end justify-between text-right bg-white text-black px-4 pt-10 pb-20"
      onMouseMove={handleMouseMove}
    >
      <motion.img src="/me.svg" />
      <motion.h1
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[64px]"
      >
        INIOBONG UKPONG IS A HIGHLY SKILLED FULL-STACK DEVELOPER WITH A PASSION
        FOR BUILDING INNOVATIVE AND USER-FRIENDLY WEB AND MOBILE APPLICATIONS.
      </motion.h1>

      {hovered && (
        <motion.img
          src="/me.png" // Replace with your image path
          alt="Hover effect"
          className="absolute pointer-events-none w-[250px] h-[250px]"
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
