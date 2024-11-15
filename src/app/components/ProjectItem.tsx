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
      className="p-4 cursor-pointer bg-orange-500 hover:bg-white text-black transition-colors duration-500 flex justify-between items-center"
      onClick={() => {
        setTimeout(() => {
          router.push(link);
        }, 1000); // Delay to show black screen briefly
      }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-[80px]">{name}</h2>
      <Image src="/arrow.png" alt="arrow" width={100} height={100} />
    </motion.div>
  );
};

export default ProjectItem;
