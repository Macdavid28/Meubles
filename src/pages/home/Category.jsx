import { useState } from "react";
import { ChairCard } from "../../ui/cards-layout/ChairCard";
import { BedCard } from "../../ui/cards-layout/BedCard";
import { BenchCard } from "../../ui/cards-layout/BenchCard";
import { LightingCard } from "../../ui/cards-layout/LightingCard";
import { DiningCard } from "../../ui/cards-layout/DiningCard";
import { RugCard } from "../../ui/cards-layout/RugCard";
import { SofaCard } from "../../ui/cards-layout/SofaCard";
import { StorageCard } from "../../ui/cards-layout/StorageCard";
import { TableCard } from "../../ui/cards-layout/TableCard";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const categories = {
  Chairs: <ChairCard />,
  Beds: <BedCard />,
  Benches: <BenchCard />,
  Dining: <DiningCard />,
  Lighting: <LightingCard />,
  Rugs: <RugCard />,
  Sofa: <SofaCard />,
  Storage: <StorageCard />,
  Tables: <TableCard />,
};

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chairs");
  const [categoryNav, setCategoryNav] = useState(false);

  const toggleCategoryNav = () => {
    setCategoryNav(!categoryNav);
  };
  const handleToggleCategoryNavOnScroll = () => {
    if (window.scroll < 100) {
      setCategoryNav(!categoryNav);
    }
  };
  window.addEventListener("scroll", handleToggleCategoryNavOnScroll);
  return (
    <div className="mt-24">
      <div className="hidden px-4 md:px-8 md:block text-center mb-8">
        <h1 className="text-xl md:text-3xl text-gray-500 font-cinzel">
          Shop By Category
          <div className="border border-black rounded-full border-t-1 w-14 md:w-60 my-4 mx-auto"></div>
        </h1>
      </div>

      <div className="hidden mt-8 lg:flex justify-center items-center">
        <ul className="px-4 py-2 lg:w-[80%] xl:w-[55%] flex gap-1 justify-center items-center shadow-md rounded-full bg-[#f8f7f4]">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`text-md rounded-full px-4 max-md:px-2 lg:px-4 xl:px-3 max-lg:px-4 py-[5px] cursor-pointer ${
                selectedCategory === category ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <div className="flex justify-between items-center px-8 md:px-20 912:px-36">
          <h1 className="text-black text-2xl font-bold">Shop By Category</h1>
          {categoryNav ? (
            <XMarkIcon className="h-6 w-6" onClick={toggleCategoryNav} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={toggleCategoryNav} />
          )}
        </div>
        <ul
          className={`${
            categoryNav
              ? "mx-3 md:w-[82%] sm:w-[90%] 912:w-[68%] sm:mx-auto mt-4 md:mx-auto lg:w-[90%] bg-white z-50 "
              : "hidden"
          }`}
        >
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`py-2 border-b border-b-gray-400 cursor-pointer ${
                selectedCategory === category ? "" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div>{categories[selectedCategory]}</div>
    </div>
  );
};
