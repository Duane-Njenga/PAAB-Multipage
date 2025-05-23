import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

function Navbar({isLoggedIn}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [investmentsDropdownOpen, setInvestmentsDropdownOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div
      className="bg-purple-900 text-white w-full flex justify-center gap-6 py-4 px-6 shadow sticky top-0 z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "mx-2 font-bold underline decoration-2 underline-offset-4"
            : "mx-2 hover:text-purple-200 transition-colors"
        }
        end
      >
        Home
      </NavLink>

      <div className="relative">
        <button
          onClick={() => dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true)}
          className="mx-2 hover:text-purple-200 transition-colors"
        >
          Our Services ⌄
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded shadow-lg w-56 z-50">
            <ul className="flex flex-col py-2">
              <li 
                className="relative"
                onMouseEnter={() => setInvestmentsDropdownOpen(true)}
                onMouseLeave={() => setInvestmentsDropdownOpen(false)}
              >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-purple-100 cursor-pointer">
                  <span>Investments</span>
                  <span className="text-sm">▶</span>
                </div>
                
                {investmentsDropdownOpen && (
                  <div className="absolute left-full top-0 ml-1 bg-white text-gray-900 rounded shadow-lg w-48 z-50">
                    <ul className="flex flex-col py-2">
                      <li>
                        <NavLink
                          to="/services/investments"
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 font-semibold bg-purple-900 text-purple-100"
                              : "block px-4 py-2 hover:bg-purple-100"
                          }
                        >
                          PAAB Investments Homepage
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/investments/special-fund"
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 font-semibold bg-purple-100 text-purple-900"
                              : "block px-4 py-2 hover:bg-purple-100"
                          }
                        >
                          Special Fund
                        </NavLink>
                      </li>
                      <li>
                          <NavLink
                            to="/services/investments/unit-trust-fund"
                            className={({ isActive }) =>
                              isActive
                                ? "block px-4 py-2 font-semibold bg-purple-100 text-purple-900"
                                : "block px-4 py-2 hover:bg-purple-100"
                            }
                          >
                            Unit Trust Fund
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

      <a href="#Footer" className="mx-2 hover:text-purple-200 transition-colors">
        Contact Us
      </a>

      <a href="#team" className="mx-2 hover:text-purple-200 transition-colors">
        Team
      </a>

      <NavLink
        to="/FAQs"
        className={({ isActive }) =>
          isActive
            ? "mx-2 font-bold underline decoration-2 underline-offset-4"
            : "mx-2 hover:text-purple-200 transition-colors"
        }
      >
        FAQs
      </NavLink>
      <button
        className= {`cursor-pointer rounded-2xl w-20 ${isLoggedIn ? "bg-red-600 ":"bg-purple-100 text-purple-800"}`}
        onClick={() => navigate("/login")}
      >{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  );
}

export default Navbar;