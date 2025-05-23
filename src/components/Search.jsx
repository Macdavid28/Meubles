import product from "@data/products.json";
import { useState, useContext, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../App";
export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  // Toggle Search
  const { showSearch, setShowSearch } = useContext(AppContext);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      // Cleanup in case component unmounts while search is open
      document.body.style.overflow = "auto";
    };
  }, [showSearch]);
  // Function to handle search input value
  const handleSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
  };

  const handleNoInput = (productInput) => {
    const keywords = searchInput.trim().toLowerCase().split(" ");
    const filteredProduct = productInput.filter((prod) => {
      const combinedText =
        `${prod.name} ${prod.category} ${prod.color}`.toLowerCase();
      return keywords.every((keyword) => combinedText.includes(keyword));
    });

    if (searchInput && filteredProduct.length === 0) {
      return (
        <div className="block text-center">
          <h1 className="text-3xl font-bold py-4">
            No result found for "{searchInput}"!
          </h1>
          <p className="text-sm text-gray-500 w-96 mx-auto">
            Sorry, we couldn't find any result that match your search query.
            Please try refining your search.
          </p>
        </div>
      );
    }
  };

  const filterItems = (dataArray) => {
    const keywords = searchInput.trim().toLowerCase().split(" ");

    return dataArray
      .filter((item) => {
        const combinedText =
          `${item.name} ${item.category} ${item.color}`.toLowerCase();
        return keywords.every((keyword) => combinedText.includes(keyword));
      })
      .map((item) => (
        <div className="shadow-sm shadow-black rounded-md p-4 " key={item.id}>
          <span className="">
            <Link to={`/products/${item.name}`} onClick={toggleSearch}>
              <img src={item.imgUrl} className="h-48" alt="" />
            </Link>
            <span className="flex items-center justify-between">
              <h1 className="text-sm  text-gray-800">{item.name}</h1>
              <h2 className="text-sm lg:text-sm  text-gray-600">
                ₦ {item.price.toLocaleString()}
              </h2>
            </span>
          </span>
        </div>
      ));
  };

  return (
    // Input Section
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="mt-24 px-4 md:px-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl md:text-3xl font-semibold px-2 w-full">
            Search Here
          </h1>
          <XMarkIcon
            className="w-8 md:w-10 cursor-pointer absolute right-6"
            onClick={toggleSearch}
          />
        </div>

        {/* Search input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            className="w-full border-b-2 border-black text-sm md:text-base px-2 py-1 outline-none"
            onChange={handleSearchInput}
            placeholder="Search by name, color or category..."
          />
        </div>

        {searchInput.trim() !== "" && (
          <>
            {/* Filtered results */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 p-2 md:p-4">
              {filterItems(product.products)}
            </div>

            {/* No results */}
            {handleNoInput(product.products)}
          </>
        )}
      </div>
    </motion.div>
  );
};
