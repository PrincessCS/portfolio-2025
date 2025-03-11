"use client"; // 👈 Add this at the top

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-2 border-gray-500 dark:bg-gray-800 rounded-full"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
