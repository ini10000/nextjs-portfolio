"use client";

// components/Technologies.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  "/js.png",
  "/gh.png",
  "/java.png",
  "/tailwind.png",
  "/react.png",
];

const Technologies: React.FC = () => {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-end justify-between text-right bg-white text-black px-4 sm:px-8 md:px-10 pt-10 pb-10">
      <motion.img
        key={currentLogo}
        src={logos[currentLogo]}
        alt="technology logo"
        className="absolute -bottom-[20px] sm:-bottom-[100px] md:-bottom-[200px] right-10 mx-auto w-[150px] sm:w-[250px] md:w-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[50px] z-20">
        PROVEN ABILITY TO DESIGN, DEVELOP, AND DEPLOY ROBUST AND SCALABLE
        APPLICATIONS. PROFICIENT IN A WIDE RANGE OF TECHNOLOGIES, INCLUDING
        REACT, NODE.JS, PYTHON, AND MORE.
      </p>
    </div>
  );
};

export default Technologies;
