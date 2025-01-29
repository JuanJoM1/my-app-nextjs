"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-start mb-4">
      The current theme is: {theme}
      <button
        className={`px-4 py-2 rounded mx-2 ${
          theme === "light" ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
        }`}
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className={`px-4 py-2 rounded mx-2 ${
          theme === "dark" ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
        }`}
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
}
