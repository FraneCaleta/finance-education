"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 hover:bg-gray-700 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <nav
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden fixed right-0 top-[72px] bg-gray-800 w-64 h-screen transition-all duration-300 ease-in-out z-50 p-6`}
      >
        <div className="flex flex-col gap-6 text-lg">
          <a href="/education" className="hover:bg-gray-700 p-2 rounded">
            Education
          </a>
          <a href="/blog" className="hover:bg-gray-700 p-2 rounded">
            Blog
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
      </nav>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
