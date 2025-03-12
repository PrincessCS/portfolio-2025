"use client"; 
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 border-2 border-gray-500 dark:bg-gray-800 rounded-full">  
      {theme === "light" ? (
        <Image src="/dark-mode.png" alt="dark-ode" width={24} height={24} />
      ) : (
        <Image src="/light-mode.png" alt="light-ode" width={24} height={24} />
      )}
    </button>
  );
}
