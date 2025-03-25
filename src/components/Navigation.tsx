"use client";

import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <a href="/" className="text-2xl font-bold flex items-center gap-2">
        <span>📊</span> My Finance App
      </a>
      <button
        className="md:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav
        className={`md:flex gap-6 text-lg ${menuOpen ? "block" : "hidden md:block"}`}
      >
        <a href="/education" className="hover:underline">
          Education
        </a>
        <a href="/blog" className="hover:underline">
          Blog
        </a>
        <a href="/tracking" className="hover:underline">
          Tracking
        </a>
      </nav>
    </div>
  );
}
