"use client";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full left-0 flex items-center justify-between p-4 bg-slate-300/50 dark:bg-gray-900/30 backdrop-blur-lg text-gray-800 dark:text-slate-300 shadow-md">
      {/* Logo */}
      <div>
        <Image src="/vercel.svg" width={50} height={50} alt="logo" />
      </div>

      {/* Menu Button (Visible only on small screens) */}
      <button
        className="md:hidden text-gray-800 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav
        className={`absolute md:relative top-16 md:top-0 left-0 md:flex w-full md:w-auto bg-slate-300 dark:bg-gray-900 shadow-md md:shadow-none p-5 md:p-0 md:bg-transparent md:dark:bg-transparent transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-5">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button className="border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg">
            Resume
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
