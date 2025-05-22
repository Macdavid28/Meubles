import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const AuthDropdown = ({ items, isMobile, setShowSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <UserIcon className="w-7 text-black hover:text-white  focus:text-black" />
      {isOpen && (
        <div
          className={`bg-white shadow-md ${
            isMobile ? "w-full mt-2 " : "absolute z-50 right-20 w-[100px]"
          }`}
        >
          <ul className="p-2">
            {items.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                onClick={() => {
                  setShowSearch(false), toggleDropdown();
                }}
              >
                <li className="p-2 text-black border-b border-b-gray-400 hover:border-l-4 text-sm hover:border-l-gray-400">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
