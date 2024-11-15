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
  <footer className="bg-orange-500 p-8 flex flex-col items-end text-black uppercase">
    {links.map((link, index) => (
      <motion.a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 transition-colors duration-500 text-[40px]"
      >
        {link.name}
      </motion.a>
    ))}
  </footer>
);

export default Footer;
