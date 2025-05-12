"use client";
import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 text-center relative">
      <h1
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight inline-block"
        style={{ lineHeight: 1.15 }}
      >
        {children}
      </h1>
      <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 rounded-full animate-gradient-x" />
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 2s linear infinite alternate;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
