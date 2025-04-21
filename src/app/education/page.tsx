export default function Education() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
        Finance & Investing Basics
      </h1>
      <div className="bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700 mb-8">
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Why Learn About Finance?
        </h2>
        <p className="text-gray-300 mb-4">
          Understanding personal finance and investing is one of the most
          powerful skills you can develop. It empowers you to make smart
          decisions, avoid debt traps, and build wealth for your future. Whether
          you want to save for a home, travel, or retire early, financial
          literacy is the foundation.
        </p>
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          The Power of Compounding
        </h2>
        <p className="text-gray-300 mb-4">
          Compounding is the process where your money earns returns, and then
          those returns start earning returns themselves. Over time, this effect
          can turn small, regular investments into significant wealth. The
          earlier you start, the more powerful compounding becomes.
        </p>
        <div className="bg-gray-900 rounded p-6 mb-4 border border-gray-700">
          <h3 className="text-lg font-semibold text-green-300 mb-2">
            Example: Compounding in Action
          </h3>
          <p className="text-gray-200">
            Imagine you invest $1,000 in stocks with an average annual return of
            8%. After 1 year, you have $1,080. In year two, you earn 8% not just
            on your original $1,000, but also on the $80 you earned last year.
            After 20 years, your $1,000 grows to almost $4,660 — without adding
            any more money!
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          How to Start Investing
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>
            <span className="font-semibold text-white">Set clear goals:</span>{" "}
            Know what you’re investing for (retirement, house, education, etc.).
          </li>
          <li>
            <span className="font-semibold text-white">Start early:</span> Time
            in the market beats timing the market. The sooner you start, the
            more you benefit from compounding.
          </li>
          <li>
            <span className="font-semibold text-white">Diversify:</span> Don’t
            put all your eggs in one basket. Spread your investments across
            different assets (stocks, bonds, crypto, etc.).
          </li>
          <li>
            <span className="font-semibold text-white">Invest regularly:</span>{" "}
            Consistent contributions, even small ones, add up over time.
          </li>
          <li>
            <span className="font-semibold text-white">Stay patient:</span>{" "}
            Markets go up and down, but long-term investors are rewarded.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Compounding is your best friend — let your money work for you.
          </li>
          <li>
            Start investing as early as possible, even with small amounts.
          </li>
          <li>Stay consistent and don’t panic during market downturns.</li>
          <li>Educate yourself and make informed decisions.</li>
        </ul>
      </div>
      <div className="text-center text-gray-400 text-sm">
        <span>
          Ready to put your knowledge into action?{" "}
          <a
            href="/tracking/stocks"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Start tracking your investments
          </a>{" "}
          or{" "}
          <a
            href="/education"
            className="text-blue-400 underline hover:text-blue-300"
          >
            keep learning
          </a>
          !
        </span>
      </div>
    </section>
  );
}
