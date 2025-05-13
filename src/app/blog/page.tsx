import {
  FaChartLine,
  FaLightbulb,
  FaPiggyBank,
  FaRegNewspaper,
  FaRobot,
  FaLeaf,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

const articles = [
  {
    title: "5 Habits of Highly Successful Investors",
    author: "Finance Team",
    date: "Jan 2025",
    icon: <FaChartLine className="text-green-400 text-2xl" />,
    summary:
      "Success in investing isn’t about luck—it’s about discipline, patience, and a willingness to learn. Discover the habits that set top investors apart and how you can adopt them in your own financial journey.",
    points: [
      "Start early and invest consistently",
      "Keep emotions in check during market swings",
      "Focus on long-term growth, not short-term gains",
      "Continuously educate yourself",
      "Diversify your portfolio",
    ],
  },
  {
    title: "Understanding Risk: How Much Should You Take?",
    author: "Jane Smith",
    date: "Jan 2025",
    icon: <FaLightbulb className="text-yellow-300 text-2xl" />,
    summary:
      "Every investment carries risk, but not all risks are created equal. Learn how to assess your risk tolerance and build a portfolio that matches your goals and comfort level.",
    points: [
      "Know your investment horizon",
      "Balance risk and reward",
      "Don’t chase trends—stick to your plan",
    ],
  },
  {
    title: "The Magic of Dollar-Cost Averaging",
    author: "Robert Brown",
    date: "Jan 2025",
    icon: <FaPiggyBank className="text-pink-400 text-2xl" />,
    summary:
      "Dollar-cost averaging is a simple yet powerful strategy for building wealth over time. By investing a fixed amount regularly, you can reduce the impact of market volatility and avoid trying to time the market.",
    points: [
      "Invest the same amount at regular intervals",
      "Buy more when prices are low, less when high",
      "Stay consistent, even during downturns",
    ],
  },
  {
    title: "How to Read Financial News Without Getting Overwhelmed",
    author: "Sarah Wilson",
    date: "Jan 2025",
    icon: <FaRegNewspaper className="text-blue-400 text-2xl" />,
    summary:
      "The world of finance is full of headlines, opinions, and noise. Learn how to filter out the hype, focus on what matters, and make informed decisions for your portfolio.",
    points: [
      "Look for facts, not just opinions",
      "Understand the basics of economic indicators",
      "Don’t react impulsively to every headline",
    ],
  },
  {
    title: "AI & The Future of Personal Finance",
    author: "Alex Kim",
    date: "Feb 2025",
    icon: <FaRobot className="text-purple-400 text-2xl" />,
    summary:
      "Artificial Intelligence is transforming how we manage money. Explore the latest AI-driven tools, robo-advisors, and how automation can help you optimize your investments and spending.",
    points: [
      "Leverage robo-advisors for portfolio management",
      "Use AI-powered budgeting apps",
      "Stay informed about emerging fintech trends",
    ],
  },
  {
    title: "Sustainable Investing: Profits with Purpose",
    author: "Emily Green",
    date: "Feb 2025",
    icon: <FaLeaf className="text-green-500 text-2xl" />,
    summary:
      "Sustainable investing is more than a trend—it's a movement. Learn how to align your investments with your values and support companies making a positive impact.",
    points: [
      "Understand ESG (Environmental, Social, Governance) criteria",
      "Research green funds and ethical ETFs",
      "Balance returns with social responsibility",
    ],
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6 animate-fade-in">
      <SectionHeading>Finance Blog & Insights</SectionHeading>
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-10 gap-4">
        <h2 className="text-2xl font-semibold text-blue-300">
          Latest Articles
        </h2>
        <div className="flex gap-2">
          <a
            href="/education"
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded shadow transition"
          >
            Education
          </a>
          <a
            href="/posts"
            className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded shadow transition"
          >
            Community Posts
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <article
            key={idx}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-lg hover:scale-[1.02] hover:border-blue-400 transition-transform group"
          >
            <div className="absolute -top-6 left-6">{article.icon}</div>
            <h3 className="text-2xl font-bold text-green-300 mb-2 group-hover:text-blue-300 transition">
              {article.title}
            </h3>
            <p className="text-gray-300 mb-3">{article.summary}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 mb-3">
              {article.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <span className="text-xs text-gray-500">
              By {article.author} · {article.date}
            </span>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center text-gray-400 text-base">
        <span>
          🚀 Stay ahead in finance! Subscribe for updates, or join the
          conversation in our{" "}
          <a
            href="/community"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Community
          </a>
          .<br />
          <span className="text-xs text-gray-500">
            Powered by AI insights & real-world experience.
          </span>
        </span>
      </div>
    </section>
  );
}
