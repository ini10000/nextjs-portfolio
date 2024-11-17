"use client";
// components/Footer.tsx
import { motion } from "framer-motion";
import useSound from "../hooks/useSound";

const links = [
  { name: "Mail", url: "/mail" },
  { name: "Résumé", url: "/resume" },
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "X", url: "https://x.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Facebook", url: "https://facebook.com" },
];

const Footer: React.FC = () => {
  const playClickSound = useSound("/click.mp3");

  return (
    <footer className="bg-orange-500 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-end text-black uppercase border-t border-black">
      {links.map((link, index) => (
        <motion.a
          onClick={playClickSound}
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 transition-colors duration-500  custom-440:text-[32px] hover:text-gray-700"
        >
          {link.name}
        </motion.a>
      ))}
    </footer>
  );
};

export default Footer;
