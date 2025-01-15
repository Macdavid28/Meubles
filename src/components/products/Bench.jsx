import product from "../../data/products.json";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";

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
      { value: "500-10000", label: "500 +", checked: false },
    ],
  },
];
const color = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "ivory", label: "Ivory", checked: false, color: "lavender" },
      { value: "black", label: "Black", checked: false, color: "black" },
      { value: "tan", label: "Tan", checked: false, color: "tan" },
      { value: "brown", label: "Brown", checked: false, color: "brown" },
      { value: "gray", label: "Gray", checked: false, color: "gray" },
      { value: "oak", label: "Oak", checked: false, color: "moccasin" },
    ],
  },
];

export const Bench = () => {
  const dispatch = useDispatch();
  const notification = () => {
    toast.success("Added to cart", {
      autoClose: 500,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
    });
  };
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
      const matchesPricing =
        !selectedFilters.pricing.length ||
        selectedFilters.pricing.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return prod.price >= min && (max ? prod.price <= max : true); // Handle "500+"
        });

      const matchesColor =
        !selectedFilters.color.length ||
        selectedFilters.color.includes(prod.color.toLowerCase());

      return matchesPricing && matchesColor;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="my-4">
      <div className="flex items-center gap-2 mt-4 mx-4 text-sm">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        <Link to="/products">Products</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Benches
      </div>
      <h1 className="text-3xl px-2 text-black my-6 font-semibold ">
        Products : Benches
      </h1>
      <div className="px-2 pb-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl">FILTER</h3>
          <FunnelIcon className="w-6" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
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

          {color.map((colorFilter) => (
            <div className="px-4 pt-8 space-y-4" key={colorFilter.id}>
              <h1 className="text-md font-semibold">{colorFilter.name}</h1>
              {colorFilter.options.map((option) => (
                <div className="flex items-center space-x-4" key={option.value}>
                  <button
                    className={`rounded-full p-2 ${
                      selectedFilters.color.includes(option.value)
                        ? "ring-4 ring-purple-400"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 my-4 sm:mx-14 md:mx-14 px-8">
          {filteredProducts
            .filter((product) => product.category === "benches")
            .map((product) => (
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
                    <ShoppingBagIcon
                      className="w-5"
                      onClick={() => {
                        dispatch(
                          cartActions.addToCart({
                            id: product.id,
                            name: product.name,
                            imgUrl: product.imgUrl,
                            price: product.price,
                          }),
                          notification()
                        );
                      }}
                    />
                  </span>
                  <h3 className="text-xs lg:text-lg text-gray-500 font-normal">
                    $ {product.price}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

//     </div>
//   );
// };
