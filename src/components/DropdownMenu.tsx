"use client";

import { useState, useRef, useEffect } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button className="hover:underline" onClick={() => setIsOpen(!isOpen)}>
        Tracking
      </button>
      <div
        className={`absolute left-0 mt-2 bg-gray-800 rounded shadow-lg p-2 w-40 transition-all duration-200 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <a
          href="/tracking/stocks"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Stocks
        </a>
        <a
          href="/tracking/crypto"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Crypto
        </a>
      </div>
    </div>
  );
}
