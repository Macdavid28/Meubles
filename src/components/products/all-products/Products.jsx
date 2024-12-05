import product from "../../../data/products.json";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  // ChevronDownIcon,
  // MinusIcon,
  FunnelIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
const filters = [
  {
    id: "product",
    name: "Product",
    options: [
      { value: "chair", label: "Chairs", checked: false },
      { value: "benches", label: "Benches", checked: false },
      { value: "beds", label: "Bed", checked: false },
      { value: "sofa", label: "Sofa", checked: false },
      { value: "rugs", label: "Rugs", checked: false },
      { value: "storage", label: "Storage", checked: false },
      { value: "dining", label: "Dining", checked: false },
      { value: "lighting", label: "Lighting", checked: false },
      { value: "table", label: "Table", checked: false },
    ],
  },
];
const pricing = [
  {
    id: "pricing",
    name: "Pricing",
    options: [
      { value: "0-100", label: "0-100", checked: false },
      { value: "101-200", label: "101-200", checked: false },
      { value: "201-300", label: "201-300", checked: false },
      { value: "301-400", label: "301-400", checked: false },
      { value: "401-500", label: "401-500", checked: false },
      { value: "500+", label: "500 +", checked: false },
    ],
  },
];
const color = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black", checked: false, color: "black" },
      { value: "white", label: "White", checked: false, color: "whitesmoke" },
      { value: "ivory", label: "Ivory", checked: false, color: "lavender" },
      { value: "blue", label: "Blue", checked: false, color: "blue" },
      { value: "pink", label: "Pink", checked: false, color: "pink" },
      { value: "orange", label: "Orange", checked: false, color: "orange" },
      { value: "silver", label: "Silver", checked: false, color: "silver" },
      { value: "green", label: "Green", checked: false, color: "green" },
      { value: "brown", label: "Brown", checked: false, color: "brown" },
      { value: "tan", label: "Tan", checked: false, color: "tan" },
      { value: "gold", label: "Gold", checked: false, color: "gold" },
      { value: "gray", label: "Gray", checked: false, color: "gray" },
      { value: "oak", label: "Oak", checked: false, color: "moccasin" },
    ],
  },
];
const sortOptions = [
  { id: "a-z", name: "A - Z", current: false },
  { id: "low to high", name: "Price: Low to High", current: false },
  { id: "high to low", name: "Price: High to Low", current: false },
];
export const Products = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    product: [],
    pricing: [],
    color: [],
  });

  const handleFilterChange = (filterCategory, optionValue) => {
    setSelectedFilters((prevFilters) => {
      const currentCategory = prevFilters[filterCategory];
      const isSelected = currentCategory.includes(optionValue);
      return {
        ...prevFilters,
        [filterCategory]: isSelected
          ? currentCategory.filter((value) => value !== optionValue)
          : [...currentCategory, optionValue],
      };
    });
  };

  const filterProducts = () => {
    return product.products.filter((prod) => {
      const matchesProductType =
        !selectedFilters.product.length ||
        selectedFilters.product.includes(prod.category.toLowerCase()); // Ensure type matches case

      const matchesPricing =
        !selectedFilters.pricing.length ||
        selectedFilters.pricing.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return prod.price >= min && (max ? prod.price <= max : true); // Handle "500+"
        });

      const matchesColor =
        !selectedFilters.color.length ||
        selectedFilters.color.includes(prod.color.toLowerCase());

      return matchesProductType && matchesPricing && matchesColor;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div>
      <div className="flex items-center gap-2 mt-4 mx-4 text-sm">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Products
      </div>
      <h1 className="text-3xl px-2 text-black my-6 font-semibold ">
        Products: Page 1
      </h1>
      <div className="px-2 pb-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl">FILTER</h3>
          <FunnelIcon className="w-6" />
        </div>
        <select className="ring-1 focus:ring-gray-400 rounded-md mx-8 px-2 py-3 outline-none border-gray-200">
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          {filters.map((filter) => (
            <div className="px-2 md:px-4 pt-4 space-y-4" key={filter.id}>
              <h1 className="text-md font-semibold">{filter.name}</h1>
              {filter.options.map((option) => (
                <div
                  className="flex items-center space-x-2 md:space-x-4"
                  key={option.value}
                >
                  <input
                    type="checkbox"
                    className="h-3 w-3 md:h-4 md:w-4 rounded border-gray-300 text-gray-500 focus:ring-gray-500"
                    checked={selectedFilters[filter.id]?.includes(option.value)}
                    onChange={() => handleFilterChange(filter.id, option.value)}
                  />
                  <label className="text-xs md:text-md">{option.label}</label>
                </div>
              ))}
            </div>
          ))}

          {pricing.map((priceFilter) => (
            <div className="px-2 md:px-2.5 pt-8 space-y-4" key={priceFilter.id}>
              <h1 className="text-md font-semibold">{priceFilter.name}</h1>
              {priceFilter.options.map((option) => (
                <div className="flex items-center space-x-4" key={option.value}>
                  <input
                    type="checkbox"
                    className="h-3 w-3 md:h-4 md:w-4 border-gray-300 text-gray-500 focus:ring-gray-500"
                    checked={selectedFilters.pricing.includes(option.value)}
                    onChange={() =>
                      handleFilterChange(priceFilter.id, option.value)
                    }
                  />
                  <label className="text-xs">${option.label}</label>
                </div>
              ))}
            </div>
          ))}

          {/* {color.map((colorFilter) => (
            <div className="px-4 pt-8 space-y-4" key={colorFilter.id}>
              <h1 className="text-md font-semibold">{colorFilter.name}</h1>
              {colorFilter.options.map((option) => (
                <div className="flex items-center space-x-4" key={option.value}>
                  <button
                    className="rounded-full p-2"
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      handleFilterChange(colorFilter.id, option.value)
                    }
                  ></button>
                  <label className="text-xs">{option.label}</label>
                </div>
              ))}
            </div>
          ))} */}
          {color.map((colorFilter) => (
            <div className="px-4 pt-8 space-y-4" key={colorFilter.id}>
              <h1 className="text-md font-semibold">{colorFilter.name}</h1>
              {colorFilter.options.map((option) => (
                <div className="flex items-center space-x-4" key={option.value}>
                  <button
                    className={`rounded-full p-2 ${
                      selectedFilters.color.includes(option.value)
                        ? "ring-1 ring-black"
                        : ""
                    }`}
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      handleFilterChange(colorFilter.id, option.value)
                    }
                  ></button>
                  <label className="text-xs">{option.label}</label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 my-4 sm:mx-14 md:mx-14 px-8">
          {filteredProducts.map((product) => (
            <div
              className="relative border border-white rounded-md"
              key={product.id}
            >
              <HeartIcon className="absolute w-8 right-2 top-3 cursor-pointer hover:bg-gray-200 rounded-full p-1" />
              <div className="border border-white rounded-md shadow-md shadow-black/35 p-4">
                <Link to={`/products/${product.name}`}>
                  <img src={product.imgUrl} alt={product.name} />
                </Link>
                <span className="flex items-center justify-between">
                  <h1 className="text-xs lg:text-lg font-semibold">
                    {product.name}
                  </h1>
                  <ShoppingBagIcon className="w-5" />
                </span>
                <h3 className="text-xs lg:text-lg text-gray-500 font-normal">
                  $ {product.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="flex items-center justify-center gap-2 my-8">
        <button className=" px-2 md:px-4 h-10 border border-gray-400">
          <ChevronLeftIcon className="w-4" />
        </button>

        <button className=" px-2 md:px-4 h-10 border border-gray-400">1</button>

        <Link to="/products/2">
          <button className=" px-2 md:px-4 h-10 border border-gray-400">
            2
          </button>
        </Link>

        <Link to="/products/3">
          <button className=" px-2 md:px-4 h-10 border border-gray-400">
            3
          </button>
        </Link>

        <Link to="/products/4">
          <button className=" px-2 md:px-4 h-10 border border-gray-400">
            4
          </button>
        </Link>

        <Link to="/products/5">
          <button className=" px-2 md:px-4 h-10 border border-gray-400">
            5
          </button>
        </Link>

        <Link to="/products/6">
          <button className=" px-2 md:px-4 h-10 border border-gray-400">
            6
          </button>
        </Link>

        <Link to="/products/7">
          <button className=" px-2 md:px-4 h-10 border border-gray-400">
            7
          </button>
        </Link>

        <button className=" px-2 md:px-4 h-10 border border-gray-400">
          <Link to="/products/7">
            <ChevronRightIcon className="w-4" />
          </Link>
        </button>
      </nav>
    </div>
  );
};

//     </div>
//   );
// };
