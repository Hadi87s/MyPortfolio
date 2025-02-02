import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Theme } from '../types/theme';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-200
        dark:bg-[rgba(36,163,190,0.1)] dark:hover:bg-[rgba(36,163,190,0.2)]
        bg-gray-200 hover:bg-gray-300
        theme-transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#24A3BE]" />
      ) : (
        <Moon className="w-5 h-5 text-[#24A3BE]" />
      )}
    </button>
  );
}