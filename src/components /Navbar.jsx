import { NavLink } from "react-router";
import { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-purple-900 text-white w-full flex gap-3 p-4 shadow-md relative">
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

      <div
        className="relative"

      >
        <button
            onClick={()=> dropdownOpen? setDropdownOpen(false):setDropdownOpen(true)}
          className="mx-2 hover:text-purple-200 transition-colors">
          Our Services ⌄
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded shadow-lg w-56 z-50">
            <ul className="flex flex-col py-2">
              <li>
                <NavLink
                  to="/services/investments"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Investments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/savings"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Innovative Savings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/advisory"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Advisory Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/partnerships"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Strategic Partnerships
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/risk"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Risk Advisory
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/wealth"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Wealth Management
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      <NavLink
        to="/AssetClasses"
        className={({ isActive }) =>
          isActive
            ? "mx-2 font-bold underline decoration-2 underline-offset-4"
            : "mx-2 hover:text-purple-200 transition-colors"
        }
      >
        Asset Classes
      </NavLink>

      <a href="#Footer" className="mx-2 hover:text-purple-200 transition-colors">
        Contact Us
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
    </div>
  );
}

export default Navbar;
