import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RoomDropdown = ({
  title,
  items,
  isMobile,
  setShowSearch,
  toggleNavbar,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown Toggle Function
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative inline-block text-black ${isMobile ? "w-full" : ""}`}
      onClick={isMobile ? toggleDropdown : undefined}
      onMouseOver={!isMobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
    >
      {/* Toggle Dropdown Button */}
      <div className="flex items-center cursor-pointer">
        {isMobile ? (
          <button className="flex items-center justify-between text-[16px] lg:text-[18px] focus:text-black w-full">
            {title}
            {isOpen ? (
              <MinusIcon className="w-5 lg:w-6 text-black  cursor-pointer" />
            ) : (
              <PlusIcon className="w-5 lg:w-6 text-black  cursor-pointer" />
            )}
          </button>
        ) : (
          <button className="flex items-center text-[16px] lg:text-[17.5px]  focus:text-black w-full">
            {title}
            {isOpen ? (
              <ChevronUpIcon className="w-5 lg:w-6 text-black  cursor-pointer" />
            ) : (
              <ChevronDownIcon className="w-5 lg:w-6 text-black  cursor-pointer" />
            )}
          </button>
        )}
      </div>
      {isOpen && (
        <div
          className={`lg:bg-white lg:shadow-md ${
            isMobile ? "w-full mt-2 " : "absolute z-50 left-0 w-[200px]"
          }`}
        >
          <ul className="lg:p-4">
            {items.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                onClick={() => {
                  setShowSearch(false), toggleDropdown(), toggleNavbar();
                }}
              >
                <li className="py-2 lg:p-2 text-black border-b border-b-gray-400 lg:hover:border-l-4 text-sm hover:border-l-gray-400">
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

// export default RoomDropdown;
