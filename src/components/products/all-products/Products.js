import product from "../../../data/products.json";
// import filter from "./../../../assets/filter.svg";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  // ChevronDownIcon,
  // MinusIcon,
  ArrowsUpDownIcon,
  ShoppingBagIcon,
  HeartIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
// import Examples from "./../../../ui/cards-layout/Examples";
const filters = [
  {
    id: "product",
    name: "Product",
    options: [
      { value: "chair", label: "Chairs", checked: false },
      { value: "bench", label: "Benches", checked: false },
      { value: "bed", label: "Bed", checked: false },
      { value: "sofa", label: "Sofa", checked: false },
      { value: "rug", label: "Rugs", checked: false },
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
      { value: "Black", label: "Black", checked: false, color: "black" },
      { value: "White", label: "White", checked: false, color: "whitesmoke" },
      { value: "Ivory", label: "Ivory", checked: false, color: "lavender" },
      { value: "Blue", label: "Blue", checked: false, color: "blue" },
      { value: "Pink", label: "Pink", checked: false, color: "pink" },
      { value: "Orange", label: "Orange", checked: false, color: "orange" },
      { value: "Silver", label: "Silver", checked: false, color: "silver" },
      { value: "Green", label: "Green", checked: false, color: "green" },
      { value: "Brown", label: "Brown", checked: false, color: "brown" },
      { value: "Tan", label: "Tan", checked: false, color: "tan" },
      { value: "Gray", label: "Gray", checked: false, color: "gray" },
    ],
  },
];
const sortOptions = [
  { name: "A - Z", current: false },
  { name: "Price: Low to High", current: false },
  { name: "Price: High to Low", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Products = () => {
  const randomItem = product.products.slice().sort(() => {
    return Math.random() - 0.5;
  });
  return (
    <div>
      <div className="flex items-center gap-2 mt-4 mx-4 text-sm">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Products
      </div>
      <div className="flex items-center justify-between px-2  pt-4 mb-8">
        <h1 className="text-3xl font-normal px-2 text-black mt-4">
          All Products
        </h1>
        <div as="div" className="relative inline-block text-left">
          <span className="flex items-center">
            <button className="group items-center flex gap-4 text-xl font-medium text-black rounded-md  py-1 px-12 ">
              Sort
              <ArrowsUpDownIcon
                aria-hidden="true"
                className="w-6 text-gray-400 group-hover:text-gray-500"
              />
            </button>
          </span>

          <span
            transition
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              {sortOptions.map((option) => (
                <span key={option.name}>
                  <a
                    href={option.href}
                    className={classNames(
                      option.current
                        ? "font-medium text-gray-500"
                        : "text-gray-500",
                      "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                    )}
                  >
                    {option.name}
                  </a>
                </span>
              ))}
            </div>
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        {/* Filters Container */}
        <div className="flex flex-col">
          {/* product Filter */}
          <div className="px-4 pt-4">
            {filters.map((filter) => (
              <div className="space-y-4">
                <h1 className="text-md font-semibold"> {filter.name} </h1>
                <div className="space-y-4" key={filter.id}>
                  {filter.options.map((option) => (
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="h-4 w-4 rounded border-gray-300 text-gray-500 focus:ring-gray-500"
                      />
                      <label>{option.label} </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Pricing Filter */}
          <div className="px-2.5 pt-8">
            {pricing.map((pricing) => (
              <div className="space-y-4">
                <h1 className="text-md font-semibold"> {pricing.name} </h1>
                <div className="space-y-4" key={pricing.id}>
                  {pricing.options.map((option) => (
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="h-4 w-4 border-gray-300 text-gray-500 focus:ring-gray-500"
                      />
                      <label>$ {option.label} </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Color Filter */}
          <div className="px-4 pt-8">
            {color.map((color) => (
              <div className="space-y-4">
                <h1 className="text-md font-semibold"> {color.name} </h1>
                <div className="space-y-4" key={color.id}>
                  {color.options.map((option) => (
                    <div className="flex items-center space-x-4">
                      <button
                        className="rounded-full  p-2"
                        style={{ backgroundColor: option.color }}
                      ></button>
                      <label>{option.label} </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4 mx-14 px-8">
          {randomItem.slice(0, 12).map((product) => (
            <div className="border border-white rounded-md">
              <div className="border border-white rounded-md shadow-md p-4">
                <img src={product.imgUrl} alt="" />
                <span className="flex items-center justify-between">
                  <h1 className="text-xs lg:text-lg font-semibold">
                    {product.name}
                  </h1>
                  <h3 className="text-xs lg:text-lg font-medium">
                    $ {product.price}
                  </h3>
                </span>
                <span className="flex gap-2 md:gap-4 my-4 items-center">
                  <button className="rounded-md bg-black p-2 lg:p-3 text-xs lg:text-lg font-normal text-white flex items-center justify-center gap-4 w-full">
                    Add to cart
                    <ShoppingBagIcon className="w-5" />
                  </button>
                  <button className="rounded-md bg-gray-300 p-2 lg:p-3 text-xs lg:text-xl font-medium text-black">
                    <HeartIcon className="w-6" />
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="flex items-center justify-center gap-2 my-8">
        <button className=" px-4 h-10 border border-gray-400">
          <ChevronDoubleLeftIcon className="w-4" />
        </button>

        <button className=" px-4 h-10 border border-gray-400">
          <ChevronLeftIcon className="w-4" />
        </button>

        <button className=" px-4 h-10 border border-gray-400">1</button>

        <Link to="/products/2">
          <button className=" px-4 h-10 border border-gray-400">2</button>
        </Link>

        <Link to="/products/3">
          <button className=" px-4 h-10 border border-gray-400">3</button>
        </Link>

        <Link to="/products/4">
          <button className=" px-4 h-10 border border-gray-400">4</button>
        </Link>

        <Link to="/products/5">
          <button className=" px-4 h-10 border border-gray-400">5</button>
        </Link>

        <Link to="/products/6">
          <button className=" px-4 h-10 border border-gray-400">6</button>
        </Link>

        <Link to="/products/7">
          <button className=" px-4 h-10 border border-gray-400">7</button>
        </Link>

        <Link to="/products/7">
          <ChevronRightIcon className="w-[50px] px-4 h-10 border border-gray-400" />
        </Link>

        <Link to="/products/7">
          <ChevronDoubleRightIcon className="w-[50px] px-4 h-10 border border-gray-400" />
        </Link>
      </nav>
    </div>
  );
};
