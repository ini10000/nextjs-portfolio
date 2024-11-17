"use client";
// components/Footer.tsx
import { motion } from "framer-motion";

const links = [
  { name: "Mail", url: "/mail" },
  { name: "Résumé", url: "/resume" },
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "X", url: "https://x.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Facebook", url: "https://facebook.com" },
];

const Footer: React.FC = () => (
  <footer className="bg-orange-500 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-end text-black uppercase border-t border-black">
    {links.map((link, index) => (
      <motion.a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 transition-colors duration-500 text-[24px] sm:text-[32px] md:text-[40px] hover:text-gray-700"
      >
        {link.name}
      </motion.a>
    ))}
  </footer>
);

export default Footer;
