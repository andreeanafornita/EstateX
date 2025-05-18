
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 50px for the background change
      setIsScrolled(window.scrollY > 50);
      
      // Check if we're still in hero section (assuming hero height is viewport height)
      setIsInHeroSection(window.scrollY < window.innerHeight - 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" 
          : "bg-black/40 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="font-serif text-2xl font-bold text-white"
        >
          Nova <span className="text-white/70">Photography</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden flex flex-col">
            <div className="container-custom py-6 flex justify-between items-center">
              <Link to="/" className="font-serif text-2xl font-bold">
                Nova <span className="text-primary/70">Photography</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col space-y-8 text-center">
                <li>
                  <Link
                    to="/"
                    className="text-3xl font-serif"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-3xl font-serif"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-3xl font-serif"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-3xl font-serif"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-3xl font-serif"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
