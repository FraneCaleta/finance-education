import { PostCard } from "@/components/PostCard";

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
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Investment Strategies for Beginners",
    content: "When starting your investment journey, it's important to...",
    author: "Jane Smith",
    date: "2024-01-14",
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
