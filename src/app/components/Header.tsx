import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-merriweather text-xl font-bold text-white">
            Solace
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href=""
            className="text-neutral-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href=""
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Find Advocates
          </Link>
          <Link
            href=""
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href=""
            className="px-4 py-2 text-neutral-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href=""
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
