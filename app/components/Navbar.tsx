// import React from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const links = [
    // { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Movies", href: "/movies" },
    { id: 3, title: "Tv-Shows", href: "/tv" },
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
            return (
              <li key={link.id} className="p-1">
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
