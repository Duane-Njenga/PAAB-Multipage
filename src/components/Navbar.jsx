import { NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";



function Navbar({ isLoggedIn }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [investmentsDropdownOpen, setInvestmentsDropdownOpen] = useState(false);
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [mobileInvestmentsOpen, setMobileInvestmentsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "px-6 py-2 rounded-lg font-semibold bg-purple-600 text-white transition-colors duration-200"
      : "px-6 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 transition-colors duration-200";

  const dropdownLinkClass = "block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-3 rounded-lg font-semibold bg-purple-600 text-white mb-2 transition-colors duration-200"
      : "block px-4 py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 mb-2 transition-colors duration-200";

  return (
    <nav
      className={`w-full sticky mb-5 top-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-white shadow-md border-gray-300" : "bg-white/95 backdrop-blur-sm border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-purple-700 hover:text-purple-800 transition-colors duration-200">
          PAAB Capital
        </NavLink>

        <button
          className="lg:hidden text-2xl text-purple-800 hover:text-purple-900 transition-colors duration-200"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? "✕" : "☰"}
        </button>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <div
            className="relative"
            onClick={() => setDropdownOpen(!dropdownOpen)}

          >
            <button className="px-6 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 transition-colors duration-200">
              Our Services ⌄
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200 w-56 z-[60]">
                <ul className="py-2">
                  <li
                    className="relative"
                    onMouseEnter={() => setInvestmentsDropdownOpen(true)}
                    onMouseLeave={() => setInvestmentsDropdownOpen(false)} 
                    onClick={() => setInvestmentsDropdownOpen(!investmentsDropdownOpen)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 hover:bg-purple-50 cursor-pointer">
                      <span onClick={() => navigate("/services/investments")} className="flex-1">
                        Investments
                      </span>
                      <span className="text-sm text-gray-400">▶</span>
                    </div>

                    {investmentsDropdownOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200 w-64 z-[70]">
                        <ul className="py-2">
                          <li>
                            <NavLink
                              to="/services/investments"
                              className={({ isActive }) =>
                                isActive ? "block px-4 py-2 font-semibold bg-purple-50 text-purple-900 " : ""
                              }
                            >
                              PAAB Investments Homepage
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services/investments/special-fund" className={dropdownLinkClass}>
                              Special Fund
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services/investments/unit-trust-fund" className={dropdownLinkClass}>
                              Unit Trust Fund
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li
                    className="relative"
                    onMouseEnter={() => setResourceDropdownOpen(true)}
                    onMouseLeave={() => setResourceDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 hover:bg-purple-50 cursor-pointer">
                      <span className="flex-1">Resources</span>
                      <span className="text-sm text-gray-400">▶</span>
                    </div>

                    {resourceDropdownOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200 w-48 z-[70]">
                        <ul className="py-2">
                          <li>
                            <NavLink to="/resources/guides" className={dropdownLinkClass}>
                              Investment Guides
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/resources/calculators" className={dropdownLinkClass}>
                              Calculators
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/resources/documents" className={dropdownLinkClass}>
                              Documents
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a 
            href="#Footer" 
            className="px-6 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 transition-colors duration-200"
          >
            Contact Us
          </a>

          <NavLink to="/FAQs" className={navLinkClass}>
            FAQs
          </NavLink>

          <button
            className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              isLoggedIn 
                ? "bg-red-600 text-white hover:bg-red-700" 
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
            onClick={() => navigate("/login")}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>
            {/* Mobile section */}
      {showMobileMenu && (
        <div className="lg:hidden px-4 pb-4 bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="flex flex-col space-y-1 pt-4">
            <NavLink 
              to="/" 
              className={mobileNavLinkClass} 
              onClick={() => setShowMobileMenu(false)} 
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={mobileNavLinkClass} 
              onClick={() => setShowMobileMenu(false)}
            >
              About Us
            </NavLink>
            
            <div className="mb-2">
              <button
                className="w-full text-left px-4 py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setMobileInvestmentsOpen(!mobileInvestmentsOpen)}
              >
                Investments
                <span className={`transition-transform duration-200 ${mobileInvestmentsOpen ? 'rotate-90' : ''}`}>▶</span>
              </button>
              {mobileInvestmentsOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <NavLink 
                    to="/services/investments" 
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    PAAB Investments Homepage
                  </NavLink>
                  <NavLink 
                    to="/services/investments/special-fund" 
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Special Fund
                  </NavLink>
                  <NavLink 
                    to="/services/investments/unit-trust-fund" 
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Unit Trust Fund
                  </NavLink>
                </div>
              )}
            </div>

            <div className="mb-2">
              <button
                className="w-full text-left px-4 py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                Resources
                <span className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-90' : ''}`}>▶</span>
              </button>
              {mobileResourcesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <NavLink 
                    to="/resources/guides" 
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Investment Guides
                  </NavLink>
                  <NavLink 
                    to="/resources/calculators" 
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Calculators
                  </NavLink>
                  <NavLink 
                    to="/resources/documents" 
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Documents
                  </NavLink>
                </div>
              )}
            </div>

            <a 
              href="#Footer" 
              className="block px-4 py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-purple-100 mb-2 transition-colors duration-200"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact Us
            </a>
            <NavLink 
              to="/FAQs" 
              className={mobileNavLinkClass} 
              onClick={() => setShowMobileMenu(false)}
            >
              FAQs
            </NavLink>
            <button
              className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                isLoggedIn 
                  ? "bg-red-600 text-white hover:bg-red-700" 
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
              onClick={() => {
                navigate("/login");
                setShowMobileMenu(false);
              }}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
