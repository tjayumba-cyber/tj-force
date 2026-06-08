import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Trial', href: '#trial' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-perforce-navy-dark text-white/80 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-end gap-6">
          <a
            href="https://www.linkedin.com/in/tjayumba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:tjayumba@gmail.com" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>

      <div className="bg-perforce-navy text-white shadow-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <svg className="w-8 h-8 text-perforce-orange" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 2L4 10v12l12 8 12-8V10L16 2zm0 3.5L24.5 11 16 16.5 7.5 11 16 5.5z" />
            </svg>
            <span className="text-lg font-bold tracking-tight">
              TJ<span className="text-perforce-orange">-Force</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-perforce-orange transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/book-trial" className="hidden sm:inline-flex btn-primary text-sm py-2.5">
              Start your Trial
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 hover:text-perforce-orange"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm hover:text-perforce-orange"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/book-trial"
              className="block btn-primary text-sm text-center mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Start your Trial
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
