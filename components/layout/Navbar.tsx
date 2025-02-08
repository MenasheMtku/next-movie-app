"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    // { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Movies", href: "/movie" },
    { id: 3, title: "TV Shows", href: "/tv" },
    {id:4, title:"About", href:"/about"}
  ];

  return (
    <header className="fixed z-50 w-full scroll-m-20 border-b-2 bg-background">
      <nav className="mx-auto flex max-w-7xl items-baseline justify-between p-4">
        <div className="flex gap-4">
          <Link href="/">
            <p className="px-4 text-2xl font-semibold md:text-3xl">
              Next Movie
            </p>
          </Link>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <ul className="flex gap-4 font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.id}
                className={`relative px-3 py-2 font-semibold transition-colors duration-200 ${isActive ? "font-semibold text-gray-800 dark:text-foreground" : "text-gray-500 dark:text-gray-200"}`}
              >
                <Link href={link.href} className="relative pb-2">
                  {link.title}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-0.5 w-full transform bg-gray-800 dark:bg-foreground transition-transform duration-200" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
