import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import ProductDropdown from "./dropdown/ProductDropdown";
import { RoomDropdown } from "./dropdown/RoomDropdown";
import { AuthDropdown } from "./dropdown/AuthDropdown";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppContext } from "../App";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // Toggle Responsive Navbar Function
  const toggleNavbar = () => {
    setMobileMenu((prev) => !prev);
  };
  // Navbar Overlay
  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenu]);

  const navigate = useNavigate();
  const signOutFunction = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  // Toggle Search
  const { showSearch, setShowSearch } = useContext(AppContext);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className=" z-50">
      <div className="relative bg-gray-400 p-4 lg:p-8 flex items-center justify-between h-14 z-50 shadow-md md:shadow-none">
        <span className="flex items-center gap-4">
          <Bars3Icon
            className="lg:hidden w-8"
            onClick={() => {
              setShowSearch(false), toggleNavbar();
            }}
          />
          <h1 className="uppercase text-2xl font-Cinzel font-bold">
            <Link to="/" onClick={() => setShowSearch(false)}>
              Meubles
            </Link>
          </h1>
        </span>

        <ul className="hidden lg:flex items-center justify-center gap-4 text-md">
          <li className="text-lg hover:text-white">
            <Link to="/" onClick={() => setShowSearch(false)}>
              Home
            </Link>
          </li>
          <li className="text-lg hover:text-white">
            <Link to="/about" onClick={() => setShowSearch(false)}>
              About
            </Link>
          </li>
          <li>
            <ProductDropdown
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              toggleNavbar={toggleNavbar}
              title="Products"
              items={[
                { label: "Beds", link: "/beds" },
                { label: "Benches", link: "/benches" },
                { label: "Storage", link: "/storage" },
                { label: "Sofa", link: "/sofa" },
                { label: "Chairs", link: "/chair" },
                { label: "Tables", link: "/table" },
                { label: "Rugs", link: "/rug" },
                { label: "Dining", link: "/dining" },
                { label: "Lighting", link: "/lighting" },
              ]}
              isMobile={false}
            />
          </li>
          <li>
            <RoomDropdown
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              toggleNavbar={toggleNavbar}
              title="Rooms"
              items={[
                { label: "Living Room", link: "/living-room" },
                { label: "Bedroom", link: "/bedroom" },
                { label: "Dining Room", link: "/dining-room" },
              ]}
              isMobile={false}
            />
          </li>
          <li className="text-lg hover:text-white">
            <Link to="/bulletin">Bulletin</Link>
          </li>
          <li className="text-lg hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-8 items-center">
          {/* Icons */}
          <div className="flex items-center gap-4">
            {user ? (
              <AuthDropdown
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                title={<span className="flex items-center gap-1">Logout</span>}
                items={[
                  {
                    label: (
                      <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={signOutFunction}
                      >
                        Logout
                      </span>
                    ),
                  },
                ]}
                isMobile={isOpen}
              />
            ) : (
              <AuthDropdown
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                title="Login"
                items={[
                  { label: "Register", link: "/signup" },
                  { label: "Sign In", link: "/login" },
                ]}
                isMobile={isOpen}
              />
            )}
            {showSearch ? (
              <XMarkIcon
                className="w-7 text-white hover:text-white text-xl relative cursor-pointer"
                onClick={toggleSearch}
              />
            ) : (
              <MagnifyingGlassIcon
                className="w-7 text-black hover:text-white text-xl relative cursor-pointer"
                onClick={toggleSearch}
              />
            )}
            <Link to="/cart" onClick={() => setShowSearch(false)}>
              <ShoppingBagIcon
                className="w-7 text-black hover:text-white text-xl relative"
                title="Cart"
              />
              <p className="bg-white text-xs font-semibold rounded-full text-center h-4 w-4 absolute top-3 md:top-4 right-3 md:right-6">
                {totalQuantity}
              </p>
            </Link>
          </div>
        </div>

        {/* Black Opacity When Navbar is opened */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 ${
            mobileMenu ? "block" : "hidden"
          }`}
          onClick={toggleNavbar}
        ></div>
        {/* Responsive Navbar */}
        <div
          className={`fixed top-0 left-0 w-[70%] md:w-[50%] bg-gray-400 z-50 h-full ease-in-out duration-500 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <span className="flex justify-between items-center px-2 border-b-2 border-gray-300">
            <XMarkIcon className="w-6" onClick={toggleNavbar} />
            <h1 className="uppercase text-xl my-4 font-Cinzel font-bold">
              <Link to="/" onClick={() => setShowSearch(false)}>
                Meubles
              </Link>
            </h1>
            <span className="flex items-center gap-3">
              <Link to="/cart" onClick={() => setShowSearch(false)}>
                <ShoppingBagIcon
                  className="w-7 text-black hover:text-white text-xl relative"
                  title="Cart"
                />
                <p className="bg-white text-xs font-semibold rounded-full text-center h-4 w-4 absolute top-3 md:top-4 right-2">
                  {totalQuantity}
                </p>
              </Link>
            </span>
          </span>
          {/* Responsive Navbar Links */}
          <ul className="pt-4 text-md max-h-screen overflow-y-auto">
            <li
              className="p-4 border-b border-b-white font-medium"
              onClick={toggleNavbar}
            >
              <Link to="/" onClick={() => setShowSearch(false)}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <Link
                to="/about"
                onClick={() => {
                  setShowSearch(false);
                  toggleNavbar();
                }}
              >
                About
              </Link>
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <ProductDropdown
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                title="Products"
                items={[
                  { label: "Beds", link: "/beds" },
                  { label: "Benches", link: "/benches" },
                  { label: "Storage", link: "/storage" },
                  { label: "Sofas", link: "/sofa" },
                  { label: "Chairs", link: "/chair" },
                  { label: "Tables", link: "/table" },
                  { label: "Rugs", link: "/rug" },
                  { label: "Dining", link: "/dining" },
                  { label: "Lighting", link: "/lighting" },
                ]}
                isMobile={true}
              />
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <RoomDropdown
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                title="Rooms"
                items={[
                  { label: "Living Room", link: "/living-room" },
                  { label: "Bedroom", link: "/bedroom" },
                  { label: "Dining Room", link: "/dining-room" },
                ]}
                isMobile={true}
              />
            </li>
            <li
              className="p-4 border-b border-b-white font-medium"
              onClick={toggleNavbar}
            >
              <Link to="/bulletin" onClick={() => setShowSearch(false)}>
                Bulletin
              </Link>
            </li>
            <li
              className="p-4 border-b border-b-white font-medium"
              onClick={toggleNavbar}
            >
              <Link to="/contact" onClick={() => setShowSearch(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
