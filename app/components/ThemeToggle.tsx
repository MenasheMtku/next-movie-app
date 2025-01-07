"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering the button until the theme has been resolved
  if (!mounted) return null;

  return (
    <Button
      variant="secondary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-2 duration-300 ease-in-out"
    >
      {resolvedTheme === "light" ? <LuMoonStar /> : <LuSunMoon />}
    </Button>
  );
};

export default ThemeToggle;
