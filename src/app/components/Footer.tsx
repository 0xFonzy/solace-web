import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-merriweather text-lg font-bold text-white mb-4">
              Solace
            </h3>
            <p className="text-neutral-400 text-sm">
              Solace’s mission is to empower patients, improve outcomes, and
              restore the promise of the U.S. healthcare system.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Healthcare Guides
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-neutral-400 text-sm">
            © {new Date().getFullYear()} Solace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
