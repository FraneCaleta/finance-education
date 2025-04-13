interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="p-6 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700">
      <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
      <p className="text-gray-300 mb-4">{post.content}</p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{post.author}</span>
        <time>{new Date(post.date).toLocaleDateString()}</time>
      </div>
    </article>
  );
}
