"use client";

import MobileMenu from "./MobileMenu";
import DropdownMenu from "./DropdownMenu";

export default function Navigation() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold flex items-center gap-2">
          <span>📊</span> My Finance App
        </a>
        <MobileMenu />
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="/education" className="hover:underline">
            Education
          </a>
          <a href="/blog" className="hover:underline">
            Blog
          </a>
          <DropdownMenu />
        </nav>
      </div>
    </div>
  );
}
