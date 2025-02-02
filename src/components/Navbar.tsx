import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Theme } from "../types/theme";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80; // Adjust based on navbar height
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-opacity-80 backdrop-blur-lg shadow-lg dark:bg-gray-900/80 bg-white/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {["about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium transition-colors duration-200
                  dark:text-gray-300 dark:hover:text-white
                  text-gray-700 hover:text-gray-900
                  capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.nav>
  );
}
