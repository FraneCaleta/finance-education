"use client";

import { useState, useRef, useEffect } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to allow movement to submenu
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="hover:underline py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Tracking
      </button>
      <div
        className={`absolute left-0 mt-0 py-2 w-40 bg-gray-800 rounded-md shadow-xl transition-all duration-200 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href="/tracking/stocks"
          className="block px-4 py-2 hover:bg-gray-700 text-white"
        >
          Stocks
        </a>
        <a
          href="/tracking/crypto"
          className="block px-4 py-2 hover:bg-gray-700 text-white"
        >
          Crypto
        </a>
      </div>
    </div>
  );
}
