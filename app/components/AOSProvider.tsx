"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Initializing AOS...");
    AOS.init({
      duration: 1000,
      once: false, // Set to false so animations trigger every time they enter the viewport
    });
  }, []);

  return <>{children}</>;
}
