import React, { useState } from "react";
import logo from "../assets/logo-as.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 md:py-6 bg-white border-b border-light-lavender sticky top-0 z-1000">
      <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Automobile Schönau Logo"
              className="h-10 md:h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 list-none">
            <Link
              to="/"
              className="text-sm text-charcoal font-normal py-3 hover:text-premium-red hover:border-b-2 hover:border-premium-red transition-all"
            >
              Heim
            </Link>
            <Link
              to="/fahrzeuge"
              className="text-sm text-charcoal font-normal py-3 hover:text-premium-red hover:border-b-2 hover:border-premium-red transition-all"
            >
              Unsere Fahrzeuge
            </Link>
            {/* <Link
              to="/verkaufen"
              className="text-sm text-charcoal font-normal py-3 hover:text-premium-red hover:border-b-2 hover:border-premium-red transition-all"
            >
              Auto verkaufen
            </Link> */}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <button className="btn btn-primary h-auto py-3 px-6 text-base">
            Termin vereinbaren
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-light-lavender shadow-xl p-6 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-6 list-none mb-8">
            <li>
              <Link
                to="/"
                className="text-lg text-charcoal font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/fahrzeuge"
                className="text-lg text-charcoal font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Unsere Fahrzeuge
              </Link>
            </li>
            <li>
              <Link
                to="/verkaufen"
                className="text-lg text-charcoal font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Auto verkaufen
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="text-lg text-charcoal font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary w-full text-base">
            Termin vereinbaren
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
