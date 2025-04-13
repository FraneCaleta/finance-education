"use client";

import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

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
        <nav className="hidden md:flex gap-6 text-lg items-center">
          <a href="/education" className="hover:underline">
            Education
          </a>
          <a href="/blog" className="hover:underline">
            Blog
          </a>
          <a href="/posts" className="hover:underline">
            Posts
          </a>
          <DropdownMenu />
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 p-4">
          <div className="flex flex-col gap-4">
            <a href="/education" className="hover:bg-gray-700 p-2 rounded">
              Education
            </a>
            <a href="/blog" className="hover:bg-gray-700 p-2 rounded">
              Blog
            </a>
            <a href="/posts" className="hover:bg-gray-700 p-2 rounded">
              Posts
            </a>
            <div className="p-2">
              <span className="text-gray-400">Tracking</span>
              <a
                href="/tracking/stocks"
                className="block hover:bg-gray-700 p-2 rounded mt-2 pl-4"
              >
                Stocks
              </a>
              <a
                href="/tracking/crypto"
                className="block hover:bg-gray-700 p-2 rounded mt-2 pl-4"
              >
                Crypto
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
