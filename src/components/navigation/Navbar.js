import products from "../../data/products.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import ProductDropdown from "../dropdown/ProductDropdown";
import { RoomDropdown } from "../dropdown/RoomDropdown";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // Search Input
  const [search, setSearch] = useState("");

  // Toggle Responsive Navbar Function
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  // Navbar Overlay
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  const handleSearch = (productArray) => {
    return productArray
      .filter((product) => {
        return search.toLowerCase() === ""
          ? false
          : product.name.toLowerCase().includes(search.toLowerCase());
      })
      .slice(0, 4)
      .map((product) => (
        <div key={product.id} className="flex gap-8 px-10">
          <img src={product.imgUrl} alt="" className="h-24" />
          <span>
            <p className="p-2"> {product.name} </p>
            <p className="p-2"> ${product.price}</p>
          </span>
        </div>
      ));
  };

  return (
    <div className="relative z-50 ">
      <div className="bg-gray-400 p-4 lg:p-8 flex items-center justify-between h-14 z-50 shadow-md md:shadow-none">
        <span className="flex items-center gap-4">
          <Bars3Icon className="lg:hidden w-8" onClick={toggleNavbar} />
          <h1 className="uppercase text-2xl font-cinzel font-bold">
            <Link to="/">Meubles</Link>
          </h1>
        </span>

        <ul className="hidden lg:flex items-center justify-center gap-4 font-cinzel text-md">
          <li className="text-md hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-md hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li>
            <ProductDropdown
              title="Products"
              items={[
                { label: "Products", link: "/products" },
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
              isMobile={isOpen}
            />
          </li>
          <li>
            <RoomDropdown
              title="Rooms"
              items={[
                { label: "Living Room", link: "/living-room" },
                { label: "Bedroom", link: "/bedroom" },
                { label: "Dining Room", link: "/dining-room" },
              ]}
              isMobile={isOpen}
            />
          </li>
          <li className="text-md hover:text-white">
            <Link to="/">Bulletin</Link>
          </li>
          <li className="text-md hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex space-x-4 items-center">
          {/* Search Bar */}
          <input
            type="text"
            className="rounded-full p-2 px-3 outline-none bg-blue-100 placeholder:px-4"
            placeholder="Search Here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Icons */}
          <UserCircleIcon className="w-6 text-black hover:text-white  focus:text-black" />
          <Link
            to="/wishlist"
            className="text-black hover:text-white text-lg font-medium"
          >
            <HeartIcon
              className="w-6 text-black hover:text-white text-xl"
              title="Wishlist"
            />
            <p className="bg-white text-xs text-black font-semibold rounded-full text-center px-1 absolute top-4 right-16">
              0
            </p>
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon
              className="w-6 text-black hover:text-white text-xl relative"
              title="Cart"
            />
            <p className="bg-white text-xs font-semibold rounded-full text-center px-1 absolute top-4 right-6">
              {totalQuantity}
            </p>
          </Link>
        </div>
        {/* Black Opacity When Navbar is opened */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleNavbar}
        ></div>
        {/* Responsive Navbar */}
        <div
          className={`fixed top-0 left-0 w-[68%] md:w-[50%] bg-gray-400 z-50 h-full ease-in-out duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <span className="flex justify-between items-center px-2 border-b-2 border-gray-300">
            <XMarkIcon className="w-6" onClick={toggleNavbar} />
            <h1 className="uppercase text-xl my-4 font-cinzel font-bold">
              <Link to="/">Meubles</Link>
            </h1>
            <span className="flex items-center gap-3">
              <Link to="/search">
                <MagnifyingGlassIcon className="w-5 text-black" />
              </Link>
              <Link
                to="/wishlist"
                className="text-black hover:text-white text-lg font-medium"
              >
                <HeartIcon
                  className="w-5 text-black hover:text-white"
                  title="Wishlist"
                />
                <p className="bg-white text-xs font-semibold rounded-full text-center px-1 absolute top-4 right-11">
                  0
                </p>
              </Link>
              <Link to="/cart">
                <ShoppingCartIcon
                  className="w-5 text-black hover:text-white"
                  title="Cart"
                />
                <p className="bg-white text-xs font-semibold rounded-full text-center px-1 absolute top-4 right-2">
                  {totalQuantity}
                </p>
              </Link>
            </span>
          </span>

          <ul className="pt-4 text-md max-h-screen overflow-y-auto">
            <li className="p-4 border-b border-b-white font-medium">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <ProductDropdown
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
                isMobile={isOpen}
              />
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <RoomDropdown
                title="Rooms"
                items={[
                  { label: "Living Room", link: "/living-room" },
                  { label: "Bedroom", link: "/bedroom" },
                  { label: "Dining Room", link: "/dining-room" },
                ]}
                isMobile={isOpen}
              />
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <Link to="/">Bulletin</Link>
            </li>
            <li className="p-4 border-b border-b-white font-medium">
              <Link to="/">Contact</Link>
            </li>
            {user ? (
              <li className="p-4 border-b border-white font-medium">
                <Link to="/account">Account</Link>
              </li>
            ) : (
              <li className="p-4 border-b border-white font-medium">
                <Link to="/login">Account</Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="absolute w-[30%] mt-2 py-8 shadow-md rounded-br-lg rounded-bl-lg bg-white top-14 right-2">
        {handleSearch(products.products)}{" "}
      </div>
    </div>
  );
};

export default Navbar;
