export default function Blog() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
        Finance Blog & Insights
      </h1>
      <div className="bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700 mb-8">
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">
          Latest Articles
        </h2>
        <div className="space-y-8">
          <article className="bg-gray-900 rounded p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              5 Habits of Highly Successful Investors
            </h3>
            <p className="text-gray-300 mb-2">
              Success in investing isn’t about luck—it’s about discipline,
              patience, and a willingness to learn. Discover the habits that set
              top investors apart and how you can adopt them in your own
              financial journey.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
              <li>Start early and invest consistently</li>
              <li>Keep emotions in check during market swings</li>
              <li>Focus on long-term growth, not short-term gains</li>
              <li>Continuously educate yourself</li>
              <li>Diversify your portfolio</li>
            </ul>
            <span className="text-xs text-gray-500">
              By Finance Team · Jan 2025
            </span>
          </article>
          <article className="bg-gray-900 rounded p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              Understanding Risk: How Much Should You Take?
            </h3>
            <p className="text-gray-300 mb-2">
              Every investment carries risk, but not all risks are created
              equal. Learn how to assess your risk tolerance and build a
              portfolio that matches your goals and comfort level.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
              <li>Know your investment horizon</li>
              <li>Balance risk and reward</li>
              <li>Don’t chase trends—stick to your plan</li>
            </ul>
            <span className="text-xs text-gray-500">
              By Jane Smith · Jan 2025
            </span>
          </article>
          <article className="bg-gray-900 rounded p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              The Magic of Dollar-Cost Averaging
            </h3>
            <p className="text-gray-300 mb-2">
              Dollar-cost averaging is a simple yet powerful strategy for
              building wealth over time. By investing a fixed amount regularly,
              you can reduce the impact of market volatility and avoid trying to
              time the market.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
              <li>Invest the same amount at regular intervals</li>
              <li>Buy more when prices are low, less when high</li>
              <li>Stay consistent, even during downturns</li>
            </ul>
            <span className="text-xs text-gray-500">
              By Robert Brown · Jan 2025
            </span>
          </article>
          <article className="bg-gray-900 rounded p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              How to Read Financial News Without Getting Overwhelmed
            </h3>
            <p className="text-gray-300 mb-2">
              The world of finance is full of headlines, opinions, and noise.
              Learn how to filter out the hype, focus on what matters, and make
              informed decisions for your portfolio.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-2">
              <li>Look for facts, not just opinions</li>
              <li>Understand the basics of economic indicators</li>
              <li>Don’t react impulsively to every headline</li>
            </ul>
            <span className="text-xs text-gray-500">
              By Sarah Wilson · Jan 2025
            </span>
          </article>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm">
        <span>
          Want to learn more? Visit our{" "}
          <a
            href="/education"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Education
          </a>{" "}
          page or join the discussion in{" "}
          <a
            href="/posts"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Community Posts
          </a>
          !
        </span>
      </div>
    </section>
  );
}
