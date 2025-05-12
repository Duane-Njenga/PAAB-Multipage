import { NavLink } from "react-router";

function Navbar(){
    return (
    <div
    className="bg-orange-400 w-full flex gap-1.5 p-3 "
    >
        <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "mx-2 font-bold" : "mx-2"}
            end
        >
            Home
        </NavLink>
        <NavLink 
            to="/CompanyDescription" 
            className={({isActive}) => isActive ? "mx-2 font-bold" : "mx-2"}
        >
            Company Description
        </NavLink>
        <NavLink 
            to="/AssetClasses" 
            className={({isActive}) => isActive ? "mx-2 font-bold" : "mx-2"}
        >
            Asset Classes
        </NavLink>
        <a href="#Footer" className="mx-2">Contact Us</a>
    </div>
    )
}

export default Navbar;