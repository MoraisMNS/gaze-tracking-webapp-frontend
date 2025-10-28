import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Header.css"; 
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-[#2563eb] hover:opacity-80 transition-opacity duration-200">
             Look Track Vision
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            <a
              href="#"
              className="hover:text-[#6d28d9] transition-colors duration-200"
            >
              Overview
            </a>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`nav-link flex items-center hover:text-[#6d28d9] transition-colors duration-200 ${
                  activeDropdown === "features" ? "active text-[#6d28d9]" : ""
                }`}
              >
                Features{" "}
                <ChevronDown size={16} className="ml-1 chevron-icon" />
              </button>
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`nav-link flex items-center hover:text-[#6d28d9] transition-colors duration-200 ${
                  activeDropdown === "about" ? "active text-[#6d28d9]" : ""
                }`}
              >
                About Look Track Vision{" "}
                <ChevronDown size={16} className="ml-1 chevron-icon" />
              </button>
            </div>

            <a
              href="#"
              className="hover:text-[#6d28d9] transition-colors duration-200"
            >
              Blog
            </a>
          </nav>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200">
              Log In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105">
              Download Software
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Menu - Features */}
        <div
          className={`mega-menu bg-white border-t shadow-lg ${
            activeDropdown === "features" ? "active" : ""
          }`}
          onMouseEnter={() => setActiveDropdown("features")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">Eye Tracking</h3>
                </div>
                <Link
                to="/gaze-tracking"
                className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                 Gaze Tracking
                </Link>
                <Link
                to="/attention-analysis"
                className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                Attention Analysis
                </Link>
              </div>

              {/* Column 2 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">Analytics</h3>
                </div>
                <Link
                to="/realtime-insights"
                className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                Real Time Insights
                </Link>
              </div>

              {/* Column 3 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">Integration</h3>
                </div>
                <Link
                to="/application-control"
                className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                Computer Application Control
                </Link>
                <Link
                to="/voice-integration"
                className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                Voice Integration
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu - About */}
        <div
          className={`mega-menu bg-white border-t shadow-lg ${
            activeDropdown === "about" ? "active" : ""
          }`}
          onMouseEnter={() => setActiveDropdown("about")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">About</h3>
                </div>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Team
                </a>
              </div>

              {/* Column 2 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">Why Us</h3>
                </div>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Why Look Track Vision
                </a>
                <Link
                to="/case-studies"
                className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                Case Studies
                </Link>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Testimonials
                </a>
              </div>

              {/* Column 3 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">Support</h3>
                </div>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Tutorials
                </a>
              </div>

              {/* Column 4 */}
              <div className="mega-menu-column">
                <div className="column-header rounded-lg px-4 py-2 mb-4">
                  <h3 className="font-semibold text-gray-800">Contact</h3>
                </div>
                <a
                  href="#"
                  className="mega-menu-item block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col items-center space-y-4 py-4 text-gray-700">
              <a href="#" className="hover:text-[#6d28d9]">
                Overview
              </a>
              <a href="#" className="hover:text-[#6d28d9]">
                Features
              </a>
              <a href="#" className="hover:text-[#6d28d9]">
                About Look Track Vision
              </a>
              <a href="#" className="hover:text-[#6d28d9]">
                Pricing
              </a>
              <a href="#" className="hover:text-[#6d28d9]">
                Blog
              </a>

              <button className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50">
                Log In
              </button>
              <button className="bg-gradient-to-r from-[#7e22ce] to-[#9333ea] text-white px-5 py-2 rounded-lg hover:opacity-90">
                Download Software
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
