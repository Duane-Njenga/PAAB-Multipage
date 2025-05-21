import { useState } from "react";

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false);

  const services = [
    "Investments",
    "Innovative Savings",
    "Advisory Services",
    "Strategic Partnerships",
    "Risk Advisory",
    "Wealth Management",
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-800 font-medium hover:text-indigo-700 focus:outline-none"
      >
        Our Services ⌄
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white border border-gray-200">
          <ul className="py-1">
            {services.map((service, index) => (
              <li
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
