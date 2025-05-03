import DropdownMenu from "./DropdownMenu";

const gradientLink =
  "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold hover:underline";

export default function Navigation() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-extrabold flex items-center gap-3 tracking-tight bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <rect x="3" y="17" width="4" height="10" rx="2" fill="#34D399" />
            <rect x="10" y="11" width="4" height="16" rx="2" fill="#60A5FA" />
            <rect x="17" y="6" width="4" height="21" rx="2" fill="#A78BFA" />
            <rect x="24" y="3" width="4" height="24" rx="2" fill="#F472B6" />
          </svg>
          My Finance App
        </a>
        <nav className="flex gap-6 text-lg items-center">
          <a
            href="/education"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold hover:underline"
          >
            Education
          </a>
          <a
            href="/blog"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold hover:underline"
          >
            Blog
          </a>
          <a
            href="/posts"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold hover:underline"
          >
            Posts
          </a>
          <DropdownMenu gradientLink="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold hover:underline" />
        </nav>
      </div>
    </div>
  );
}
