"use client";

import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-blue-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] w-[40vw] h-[40vw] bg-green-500 opacity-10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <SectionHeading>My Finance App</SectionHeading>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 drop-shadow">
          Take control of your financial future. Track your stocks and crypto,
          read expert blog posts, learn with our education hub, and join the
          community by sharing your own insights.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="/tracking/stocks"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            🚀 Track Stocks
          </a>
          <a
            href="/tracking/crypto"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            💎 Track Crypto
          </a>
          <a
            href="/education"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            📚 Learn Finance
          </a>
          <a
            href="/posts"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            📝 Community Posts
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 mt-8 text-gray-400 text-base">
          <span className="flex items-center gap-2">
            <span className="text-green-400">✔</span> Secure
            <span className="text-blue-400">✔</span> Private
            <span className="text-purple-400">✔</span> Free
          </span>
          <span className="text-xs text-gray-500">
            Your data stays on your device. No sign-up required.
          </span>
        </div>
      </div>
    </section>
  );
}
