"use client";

import PostCard from "../../components/PostCard";
import { useState, useRef } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  fullContent: string;
}

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "Getting Started with Personal Finance",
    content:
      "Managing your personal finances is crucial for long-term success... ",
    fullContent:
      "Managing your personal finances is crucial for long-term success. Start by tracking your income and expenses, set clear financial goals, and create a budget that works for you. Remember, small steps taken today can lead to big rewards in the future. Automate your savings, avoid unnecessary debt, and always keep learning about money management.",
    author: "John Doe",
    date: "2025-01-15",
  },
  {
    id: "2",
    title: "Investment Strategies for Beginners",
    content: "When starting your investment journey, it's important to...",
    fullContent:
      "When starting your investment journey, it's important to understand your risk tolerance and diversify your portfolio. Consider index funds or ETFs for broad market exposure, and avoid putting all your eggs in one basket. Stay consistent, invest regularly, and don't panic during market downturns.",
    author: "Jane Smith",
    date: "2025-01-14",
  },
  {
    id: "3",
    title: "Understanding Emergency Funds",
    content:
      "An emergency fund is your financial safety net when unexpected expenses arise...",
    fullContent:
      "An emergency fund is your financial safety net when unexpected expenses arise. Aim to save at least 3-6 months' worth of living expenses in a separate, easily accessible account. This will help you avoid debt and give you peace of mind during tough times.",
    author: "Mike Johnson",
    date: "2025-01-13",
  },
  {
    id: "4",
    title: "Budgeting Tips for Young Professionals",
    content:
      "Creating and sticking to a budget is essential for financial stability...",
    fullContent:
      "Creating and sticking to a budget is essential for financial stability. Track your spending, prioritize needs over wants, and set aside money for savings and investments. Use budgeting apps or spreadsheets to stay organized and motivated.",
    author: "Sarah Wilson",
    date: "2025-01-12",
  },
  {
    id: "5",
    title: "Retirement Planning 101",
    content:
      "It's never too early to start planning for retirement. Here's what you need to know...",
    fullContent:
      "It's never too early to start planning for retirement. Contribute to retirement accounts like IRAs or 401(k)s, take advantage of employer matches, and let compounding work in your favor. Review your plan regularly and adjust as your goals or circumstances change.",
    author: "Robert Brown",
    date: "2025-01-11",
  },
  {
    id: "6",
    title: "How to Avoid Lifestyle Inflation",
    content:
      "Lifestyle inflation can eat away at your savings as your income grows...",
    fullContent:
      "Lifestyle inflation can eat away at your savings as your income grows. To avoid it, increase your savings rate when you get a raise, keep your expenses in check, and focus on long-term goals rather than short-term gratification. Remember, wealth is built by keeping your spending below your means.",
    author: "Emily Carter",
    date: "2025-01-10",
  },
];

export default function Posts() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside the modal content
  function handleModalOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && e.target === modalRef.current) {
      setSelectedPost(null);
    }
  }

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center drop-shadow">
        Community Posts
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <p className="text-gray-300 text-lg max-w-[75%]">
          Discover tips, stories, and advice from our finance community. Click a
          post to read more or share your own experience!
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow transition transform hover:-translate-y-1 hover:scale-105 whitespace-nowrap"
        >
          + Write a Post
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {MOCK_POSTS.map((post) => (
          <button
            key={post.id}
            className="text-left focus:outline-none"
            onClick={() => setSelectedPost(post)}
            aria-label={`Read full post: ${post.title}`}
          >
            <PostCard post={post} />
          </button>
        ))}
      </div>
      {/* Modal for full post */}
      {selectedPost && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={handleModalOverlayClick}
        >
          <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 max-w-lg w-full mx-4 p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={() => setSelectedPost(null)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-white">
              {selectedPost.title}
            </h2>
            <div className="flex justify-between text-sm text-gray-400 mb-4">
              <span>{selectedPost.author}</span>
              <time>{new Date(selectedPost.date).toLocaleDateString()}</time>
            </div>
            <p className="text-gray-200 mb-2">{selectedPost.fullContent}</p>
          </div>
        </div>
      )}
      <div className="mt-12 text-center text-gray-400 text-sm">
        <span>
          Want to learn more? Visit our{" "}
          <a
            href="/blog"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Blog
          </a>{" "}
          or{" "}
          <a
            href="/education"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Education
          </a>{" "}
          pages!
        </span>
      </div>
      <style jsx global>{`
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: animate-fade-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
