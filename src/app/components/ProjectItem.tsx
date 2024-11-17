"use client";
// components/ProjectItem.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectItemProps {
  name: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, link }) => {
  const router = useRouter();

  return (
    <motion.div
      className="p-4 sm:p-6 md:p-8 cursor-pointer bg-orange-500 hover:bg-white text-black transition-colors duration-500 flex justify-between items-center border border-black"
      onClick={() => {
        setTimeout(() => {
          router.push(link);
        }, 1000); // Delay to show black screen briefly
      }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-[24px] sm:text-[40px] md:text-[60px] lg:text-[80px]">
        {name}
      </h2>
      <Image
        src="/arrow.svg"
        alt="arrow"
        width={50}
        height={50}
        className="w-[50px] sm:w-[80px] md:w-[100px]"
      />
    </motion.div>
  );
};

export default ProjectItem;
