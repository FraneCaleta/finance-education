"use client";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
        Welcome to <span className="text-blue-400">My Finance App</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Take control of your financial future. Track your stocks and crypto,
        read expert blog posts, learn with our education hub, and join the
        community by sharing your own insights.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <a
          href="/tracking/stocks"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Track Stocks
        </a>
        <a
          href="/tracking/crypto"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Track Crypto
        </a>
        <a
          href="/education"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Learn Finance
        </a>
        <a
          href="/posts"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded transition"
        >
          Community Posts
        </a>
      </div>
      <div className="mt-8 text-gray-400 text-sm">
        <span>Secure. Private. Free.</span>
      </div>
    </section>
  );
}
