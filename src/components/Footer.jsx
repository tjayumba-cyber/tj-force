import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-perforce-navy-dark text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-perforce-orange" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2L4 10v12l12 8 12-8V10L16 2zm0 3.5L24.5 11 16 16.5 7.5 11 16 5.5z" />
          </svg>
          <span className="text-white font-semibold text-sm">
            TJ<span className="text-perforce-orange">-Force</span>
          </span>
        </div>
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} T.J. Ayumba. All rights reserved.
          <span className="mx-2">|</span>
          <Link to="/book-trial" className="hover:text-white transition-colors">
            Start your Trial
          </Link>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/tjayumba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
