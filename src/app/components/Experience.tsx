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
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col space-y-1 ${
              index === 1 ? "items-end" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Decorative Lines */}
            <div className="flex space-y-10 items-end">
              <span
                className={`border-t-2 border-black w-[160px] transform ${
                  index === 1 ? "rotate-12 " : "-rotate-12 "
                }`}
              ></span>
              <span
                className={`border-t-2 border-black w-[160px] transform ${
                  index === 1 ? "rotate-12 " : "-rotate-12 "
                }`}
              ></span>
            </div>

            {/* Experience Title */}
            <p className="text-[80px] mb-6 mt-10">{experience.title}</p>

            {/* Duration */}
            <p className="text-[24px] mb-10">{experience.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
