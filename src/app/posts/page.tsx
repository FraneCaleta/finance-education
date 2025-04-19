import PostCard from "../../components/PostCard";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "Getting Started with Personal Finance",
    content:
      "Managing your personal finances is crucial for long-term success...",
    author: "John Doe",
    date: "2025-01-15",
  },
  {
    id: "2",
    title: "Investment Strategies for Beginners",
    content: "When starting your investment journey, it's important to...",
    author: "Jane Smith",
    date: "2025-01-14",
  },
  {
    id: "3",
    title: "Understanding Emergency Funds",
    content:
      "An emergency fund is your financial safety net when unexpected expenses arise...",
    author: "Mike Johnson",
    date: "2025-01-13",
  },
  {
    id: "4",
    title: "Budgeting Tips for Young Professionals",
    content:
      "Creating and sticking to a budget is essential for financial stability...",
    author: "Sarah Wilson",
    date: "2025-01-12",
  },
  {
    id: "5",
    title: "Retirement Planning 101",
    content:
      "It's never too early to start planning for retirement. Here's what you need to know...",
    author: "Robert Brown",
    date: "2025-01-11",
  },
];

export default function Posts() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Community Posts</h1>
      <div className="grid gap-6">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
