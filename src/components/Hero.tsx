import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient theme-transition transition-all duration-300">
      <div className="absolute inset-0 opacity-90" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative mx-auto"
        >
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(36,163,190,0.5)] to-[rgba(36,163,190,0.8)] animate-pulse opacity-75 blur-lg"></div>
            <img
              src="../../public/Me.jpg"
              alt="Hadi Irshaid"
              className="w-48 h-48 rounded-full object-cover relative z-10 ring-4 ring-[rgba(36,163,190,0.6)] ring-offset-4 ring-offset-[rgba(15,2,2,0.8)]"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-hero-title mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hadi Irshaid
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-hero-text max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Computer Engineering student at An-Najah National University,
          passionate about problem solving and web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            delay: 0.6,
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown
            size={48}
            className="mx-auto text-black dark:text-white transition-colors"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
