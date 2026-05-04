// components/NavigationMenuBar.jsx
import {useState} from "react";
import {Link} from "react-router-dom";
import PastaLogoIcon from "./PastaLogoIcon";

const NavigationMenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-row-reverse justify-between items-center">
        <Link
          id="navbar-logo-link"
          title="חזרה לדף הבית"
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <PastaLogoIcon />
        </Link>

        {/* Desktop Menu */}
        <div
          id="desktop-navigation-links"
          className="hidden md:flex gap-8 font-semibold text-gray-700"
        >
          <Link
            to="/contact"
            className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-700 hover:shadow-orange-200 transition-all duration-300"
          >
            להשארת פרטים
          </Link>
          <Link to="/events" className="mt-2 relative group overflow-hidden">
            <span>אירועים, פלאיירים והנחות</span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="mt-2 relative group overflow-hidden">
            <span>קצת עלי</span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-button"
          className="md:hidden p-2 text-orange-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenuBar;
