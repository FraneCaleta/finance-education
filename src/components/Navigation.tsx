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
        {/* Always render the burger button, just hide on desktop */}
        <button
          className="block md:hidden p-2 hover:bg-gray-700 rounded text-xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          ☰
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
        <div className="md:hidden fixed top-[72px] right-0 w-[50vw] max-w-xs h-[calc(100vh-72px)] bg-gray-800 p-4 z-50 border-l border-gray-700">
          <div className="flex flex-col gap-4">
            {/* Close icon inside the menu for accessibility */}
            <button
              className="self-end mb-2 p-2 rounded hover:bg-gray-700 text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              ✕
            </button>
            <a
              href="/education"
              className="hover:bg-gray-700 p-3 rounded text-lg"
            >
              Education
            </a>
            <a href="/blog" className="hover:bg-gray-700 p-3 rounded text-lg">
              Blog
            </a>
            <a href="/posts" className="hover:bg-gray-700 p-3 rounded text-lg">
              Posts
            </a>
            <div className="p-2">
              <span className="text-gray-400 text-lg">Tracking</span>
              <a
                href="/tracking/stocks"
                className="block hover:bg-gray-700 p-3 rounded mt-2 pl-4 text-lg"
              >
                Stocks
              </a>
              <a
                href="/tracking/crypto"
                className="block hover:bg-gray-700 p-3 rounded mt-2 pl-4 text-lg"
              >
                Crypto
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 backdrop-blur-sm bg-black/10"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
