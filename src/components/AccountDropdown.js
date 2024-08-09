import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
const AccountDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  useEffect(() => {
    window.onscroll = () => setDropdownOpen(false);
  }, []);
  const [user] = useAuthState(auth);

  // SignOut Function
  const navigate = useNavigate();
  const signOutFunction = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div
      className="relative"
      ref={accountDropdownRef}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        <UserCircleIcon className="w-6 text-white hover:text-black text-xl font-medium focus:text-black" />
      </button>
      {dropdownOpen && (
        <div className="absolute -left-14 w-48 bg-white shadow-md  p-2">
          {user ? (
            <div>
              <Link
                to="/account"
                className="border-b border-b-gray-400 block p-2 text-gray-800  hover:border-l-4 hover:border-l-gray-400"
              >
                Account Information
              </Link>
              <Link
                to="/account"
                className="border-b border-b-gray-400 block p-2 text-gray-800  hover:border-l-4 hover:border-l-gray-400"
              >
                Wishlist
              </Link>
              <Link
                to="/account"
                className="border-b border-b-gray-400 block p-2 text-gray-800  hover:border-l-4 hover:border-l-gray-400"
              >
                Orders
              </Link>
              <button
                className="flex gap-2 items-center p-2 border-b border-b-gray-400  text-gray-800  hover:border-l-4 hover:border-l-gray-400 w-full"
                onClick={signOutFunction}
              >
                Logout
                <ArrowRightOnRectangleIcon className="w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block p-4 text-gray-800   hover:border-l-4 hover:border-l-gray-400"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
