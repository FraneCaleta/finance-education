interface DropdownMenuProps {
  gradientLink: string;
}

export default function DropdownMenu({ gradientLink }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <a
        href="#"
        className={`py-2 ${gradientLink} focus:outline-none`}
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded="false"
      >
        Tracking
      </a>
      <div
        className="absolute left-0 mt-0 py-2 w-40 bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-20"
        tabIndex={-1}
      >
        <a
          href="/tracking/stocks"
          className="block px-4 py-2 rounded font-extrabold tracking-tight text-blue-400 hover:bg-gray-700"
        >
          Stocks
        </a>
        <a
          href="/tracking/crypto"
          className="block px-4 py-2 rounded font-extrabold tracking-tight text-purple-400 hover:bg-gray-700"
        >
          Crypto
        </a>
      </div>
    </div>
  );
}
