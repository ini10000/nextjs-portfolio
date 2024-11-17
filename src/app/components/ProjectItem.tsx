"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import useSound from "../hooks/useSound";

interface ProjectItemProps {
  name: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, link }) => {
  const [clicked, setClicked] = useState(false);
  const playClickSound = useSound("/click.mp3");

  return (
    <motion.div
      className={`p-4 sm:p-6 md:p-8 cursor-pointer ${
        clicked
          ? "bg-black text-orange-500"
          : "bg-orange-500 hover:bg-white text-black "
      } transition-colors duration-500 flex justify-between items-center border border-black`}
      onClick={() => {
        playClickSound();
        setClicked(true);
        setTimeout(() => {
          window.open(link, "_blank"); // Open the link in a new tab
          setClicked(false);
        }, 2000); // Delay to show black screen briefly
      }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-[24px] sm:text-[40px] md:text-[60px] lg:text-[80px]">
        {name}
      </h2>
      <Image
        src={clicked ? "/orange_arrow.svg" : "/arrow.svg"}
        alt="arrow"
        width={50}
        height={50}
        className="w-[50px] sm:w-[80px] md:w-[100px]"
      />
    </motion.div>
  );
};

export default ProjectItem;
