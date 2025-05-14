import { NavLink } from "react-router";

function Navbar() {
  return (
    <div
      className="bg-purple-900 text-white w-full flex gap-3 p-4 shadow-md"
    >
      <NavLink 
        to="/" 
        className={({isActive}) => 
          isActive 
            ? "mx-2 font-bold underline decoration-2 underline-offset-4" 
            : "mx-2 hover:text-purple-200 transition-colors"
        }
        end
      >
        Home
      </NavLink>
      <NavLink 
        to="/CompanyDescription" 
        className={({isActive}) => 
          isActive 
            ? "mx-2 font-bold underline decoration-2 underline-offset-4" 
            : "mx-2 hover:text-purple-200 transition-colors"
        }
      >
        Company Description
      </NavLink>
      <NavLink 
        to="/AssetClasses" 
        className={({isActive}) => 
          isActive 
            ? "mx-2 font-bold underline decoration-2 underline-offset-4" 
            : "mx-2 hover:text-purple-200 transition-colors"
        }
      >
        Asset Classes
      </NavLink>
      <a 
        href="#Footer" 
        className="mx-2 hover:text-purple-200 transition-colors"
      >
        Contact Us
      </a>
    </div>
  );
}

export default Navbar;