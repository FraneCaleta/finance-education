export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Finance & Investing Basics
      </h1>
      <div className="bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700 mb-10">
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
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Gain control over your money and spending habits</li>
          <li>Reduce stress and anxiety about your financial future</li>
          <li>Unlock opportunities for growth and independence</li>
        </ul>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200 mb-6">
          "The best investment you can make is in yourself." – Warren Buffett
        </blockquote>

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
          <p className="text-gray-200 mb-2">
            Imagine you invest $1,000 in stocks with an average annual return of
            8%. After 1 year, you have $1,080. In year two, you earn 8% not just
            on your original $1,000, but also on the $80 you earned last year.
            After 20 years, your $1,000 grows to almost $4,660 — without adding
            any more money!
          </p>
          <p className="text-gray-400 text-sm">
            Try using a{" "}
            <a
              href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              compound interest calculator
            </a>{" "}
            to see how your money could grow.
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Common Financial Mistakes to Avoid
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Living beyond your means and accumulating high-interest debt</li>
          <li>Not having an emergency fund for unexpected expenses</li>
          <li>Ignoring the impact of inflation on your savings</li>
          <li>Trying to time the market instead of investing consistently</li>
          <li>Failing to diversify your investments</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          How to Start Investing
        </h2>
        <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
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
        </ol>

        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Types of Investments
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">
              Stocks
            </h3>
            <p className="text-gray-200">
              Ownership in a company. Historically offer higher returns, but
              with higher risk.
            </p>
          </div>
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Bonds</h3>
            <p className="text-gray-200">
              Loans to companies or governments. Lower risk and returns than
              stocks, but more stable.
            </p>
          </div>
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">
              Mutual Funds & ETFs
            </h3>
            <p className="text-gray-200">
              Pooled investments that let you buy a basket of assets, offering
              instant diversification.
            </p>
          </div>
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">
              Real Estate & Alternatives
            </h3>
            <p className="text-gray-200">
              Physical property or alternative assets like crypto, commodities,
              or collectibles.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Building Good Financial Habits
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Track your spending and create a budget</li>
          <li>Pay yourself first: automate savings and investments</li>
          <li>Review your finances regularly and adjust as needed</li>
          <li>Keep learning and stay curious about money</li>
        </ul>

        <div className="bg-gray-900 rounded p-6 mb-4 border border-gray-700">
          <h3 className="text-lg font-semibold text-pink-300 mb-2">
            Did You Know?
          </h3>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>
              Most millionaires built their wealth through consistent investing,
              not lottery wins or inheritance.
            </li>
            <li>
              Even small amounts, invested early, can grow to large sums over
              decades.
            </li>
            <li>Financial freedom is about choices, not just money.</li>
          </ul>
        </div>

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
          <li>Financial literacy is a lifelong journey — keep learning!</li>
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
      <div className="mt-10 text-center text-gray-500 text-xs">
        <span>
          Want more? Check out resources like{" "}
          <a
            href="https://www.investopedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Investopedia
          </a>
          ,{" "}
          <a
            href="https://www.bogleheads.org/wiki/Main_Page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Bogleheads Wiki
          </a>
          , or{" "}
          <a
            href="https://www.ramseysolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Ramsey Solutions
          </a>
          .
        </span>
      </div>
    </section>
  );
}
