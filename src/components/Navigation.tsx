"use client";

import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold flex items-center gap-2">
          <span>📊</span> My Finance App
        </a>
        <button
          className="md:hidden p-2 hover:bg-gray-700 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className="hidden md:flex gap-6 text-lg">
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

      {/* Mobile menu */}
      <nav
        className={`${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden fixed right-0 top-[72px] bg-gray-800 w-64 h-screen transition-all duration-300 ease-in-out z-50 p-6`}
      >
        <div className="flex flex-col gap-6 text-lg">
          <a href="/education" className="hover:bg-gray-700 p-2 rounded">
            Education
          </a>
          <a href="/blog" className="hover:bg-gray-700 p-2 rounded">
            Blog
          </a>
          <a href="/tracking" className="hover:bg-gray-700 p-2 rounded">
            Tracking
          </a>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
