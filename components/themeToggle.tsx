"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={theme === "light" ? "bg-accent" : "bg-accent"}
    >
      {theme === "light" ? (
        <IoMoonSharp className="h-5 w-5" />
      ) : (
        <IoSunnySharp className="h-5 w-5" />
      )}
    </Button>
  );
}