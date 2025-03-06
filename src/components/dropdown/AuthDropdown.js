import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export const AuthDropdown = ({ items, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <UserCircleIcon
        className="w-6 text-black hover:text-white  focus:text-black"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div
          className={`lg:bg-white lg:shadow-md ${
            isMobile ? "w-full mt-2 " : "absolute z-50 right-8 w-[100px]"
          }`}
        >
          <ul className="lg:p-4">
            {items.map((item, index) => (
              <Link to={item.link} key={index} onClick={toggleDropdown}>
                <li className=" lg:p-2 text-black border-b border-b-gray-400 lg:hover:border-l-4 text-sm hover:border-l-gray-400">
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
