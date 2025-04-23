export default function CryptoTracking() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
        Crypto Tracking Dashboard
      </h1>
      <div className="bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700 mb-8">
        <h2 className="text-2xl font-semibold text-purple-300 mb-3">
          Why Track Your Crypto?
        </h2>
        <p className="text-gray-300 mb-4">
          The cryptocurrency market moves fast. Tracking your coins and tokens
          helps you stay on top of price swings, manage risk, and seize new
          opportunities. Our dashboard makes it easy to monitor your crypto
          portfolio and learn as you grow.
        </p>
        <div className="bg-gray-900 rounded p-6 mb-4 border border-gray-700">
          <h3 className="text-lg font-semibold text-green-300 mb-2">
            Example: Riding the Crypto Waves
          </h3>
          <p className="text-gray-200">
            Suppose you bought $500 worth of Bitcoin and $500 of Ethereum. By
            tracking their performance, you can see how market volatility
            impacts your holdings and make smarter decisions about when to buy,
            hold, or rebalance.
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-purple-300 mb-3">
          What You Can Do Here
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>
            <span className="font-semibold text-white">
              Add your crypto assets:
            </span>{" "}
            Track Bitcoin, Ethereum, and hundreds of other coins.
          </li>
          <li>
            <span className="font-semibold text-white">
              Monitor real-time prices:
            </span>{" "}
            Stay updated with live market data.
          </li>
          <li>
            <span className="font-semibold text-white">
              Analyze your portfolio:
            </span>{" "}
            See your gains, losses, and allocation at a glance.
          </li>
          <li>
            <span className="font-semibold text-white">
              Learn about blockchain:
            </span>{" "}
            Access resources to deepen your crypto knowledge.
          </li>
        </ul>
        <div className="bg-purple-900 rounded p-4 mt-6 border border-purple-700 text-purple-200 text-center">
          <span className="font-semibold">Tip:</span> Crypto is volatile—track
          regularly, diversify, and never invest more than you can afford to
          lose.
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm">
        <span>
          Interested in stocks too?{" "}
          <a
            href="/tracking/stocks"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Track your stocks
          </a>{" "}
          alongside your crypto!
        </span>
      </div>
    </section>
  );
}
