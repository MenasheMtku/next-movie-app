"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchInput from "../SearchInput";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 2, title: "Movies", href: "/movie" },
    { id: 3, title: "TV Shows", href: "/tv" },
    { id: 4, title: "About", href: "/about" },
  ];

  return (
    <header className="fixed z-50 w-full scroll-m-20 border-b-2 bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <p className="text-2xl font-semibold md:text-3xl">Next Movie</p>
          </Link>
          <ThemeToggle />
          <SearchInput />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={30} className="transition-transform duration-200" />
          ) : (
            <Menu size={30} className="transition-transform duration-200" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden gap-4 font-medium md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.id}
                className={`relative px-3 py-2 font-semibold transition-colors duration-200 ${isActive
                  ? "font-semibold text-gray-800 dark:text-foreground"
                  : "text-gray-500 dark:text-gray-200"
                  }`}
              >
                <Link href={link.href} className="relative pb-2">
                  {link.title}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-0.5 w-full transform bg-gray-800 transition-transform duration-200 dark:bg-foreground" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu with Animation */}
        <div
          className={`absolute left-0 right-0 top-full transform border-b-2 bg-background transition-all duration-300 ease-in-out md:hidden ${isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
            }`}
        >
          <ul className="flex flex-col items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.id}
                  className={`transform transition-all duration-300 ease-in-out w-full ${isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${isMenuOpen ? link.id * 100 : 0}ms`,
                  }}
                >
                  <Link
                    href={link.href}
                    className={`flex px-4 py-3 transition-colors duration-200 justify-center hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive
                      ? "font-semibold text-gray-800 dark:text-foreground"
                      : "text-gray-500 dark:text-gray-200"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
