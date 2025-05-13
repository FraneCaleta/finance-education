import SectionHeading from "@/components/SectionHeading";

export default function StocksTrackingPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <SectionHeading>Track Stocks</SectionHeading>
      <div className="bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700 mb-8">
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Why Track Your Stocks?
        </h2>
        <p className="text-gray-300 mb-4">
          Keeping an eye on your stock investments helps you make informed
          decisions, spot trends, and stay motivated on your wealth-building
          journey. With our dashboard, you can monitor your portfolio, analyze
          performance, and plan for the future—all in one place.
        </p>
        <div className="bg-gray-900 rounded p-6 mb-4 border border-gray-700">
          <h3 className="text-lg font-semibold text-green-300 mb-2">
            Example: The Power of Consistency
          </h3>
          <p className="text-gray-200">
            Imagine investing $200 every month in a diversified stock portfolio.
            Thanks to the compounding effect and regular contributions, your
            investments can grow exponentially over time—even if the market has
            ups and downs along the way.
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          What You Can Do Here
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>
            <span className="font-semibold text-white">
              Add your favorite stocks:
            </span>{" "}
            Build a watchlist and track their performance.
          </li>
          <li>
            <span className="font-semibold text-white">
              Monitor gains and losses:
            </span>{" "}
            See how your investments are performing over time.
          </li>
          <li>
            <span className="font-semibold text-white">Analyze trends:</span>{" "}
            Use charts and data to spot opportunities and risks.
          </li>
          <li>
            <span className="font-semibold text-white">Stay informed:</span> Get
            the latest news and updates on your tracked stocks.
          </li>
        </ul>
        <div className="bg-blue-900 rounded p-4 mt-6 border border-blue-700 text-blue-200 text-center">
          <span className="font-semibold">Tip:</span> Long-term investing in
          quality stocks, combined with regular tracking and learning, is a
          proven way to build wealth.
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm">
        <span>
          Want to diversify?{" "}
          <a
            href="/tracking/crypto"
            className="text-purple-400 underline hover:text-purple-300"
          >
            Track your crypto portfolio
          </a>{" "}
          too!
        </span>
      </div>
    </section>
  );
}
