"use client";
// components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  title: string;
  duration: string;
};

const experiences: ExperienceItem[] = [
  { title: "ASHIPA ELECTRIC", duration: "DEC 2022 - OCT 2024" },
  { title: "SHECLUDED", duration: "NOV 2021 - APR 2022" },
  { title: "INVESTNAIRA", duration: "FEB 2019 - OCT 2021" },
];

const Experience: React.FC = () => {
  return (
    <section className="px-10 py-16 bg-white text-black">
      <div className="">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col space-y-1`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Experience Title */}
            <p className="text-[80px] mb-6">{experience.title}</p>

            {/* Duration */}
            <p className="text-[24px]">{experience.duration}</p>
            {index !== 2 && (
              <div className="border-l-[4px] border-black h-[160px] mt-12"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
