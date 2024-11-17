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
    <section className="px-4 sm:px-8 md:px-10 lg:px-16 pb-16 bg-white text-black">
      <div>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-start py-6 md:py-10">
              {/* Experience Title */}
              <p className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px]">
                {experience.title}
              </p>

              {/* Duration */}
              <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-gray-600">
                {experience.duration}
              </p>
            </div>
            {index !== 2 && (
              <div className="mt-8 md:mt-12 flex">
                <div className="border-black border-l-[4px] h-[80px] sm:h-[120px] md:h-[160px] rotate-45 ml-6 sm:ml-8 md:ml-10"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
