import { useState } from "react";

import product from "../../data/products.json";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  HeartIcon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "A - Z", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "chair", label: "Chairs", checked: false },
      { value: "bench", label: "Benches", checked: false },
      { value: "bed", label: "Bed", checked: true },
      { value: "sofa", label: "Sofa", checked: false },
      { value: "rug", label: "Rugs", checked: false },
      { value: "storage", label: "Storage", checked: false },
      { value: "dining", label: "Dining", checked: false },
      { value: "lighting", label: "Lighting", checked: false },
      { value: "table", label: "Table", checked: false },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Examples() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <div
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <div
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <div
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close div</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Products
            </h1>

            <div className="flex items-center">
              <div as="div" className="relative inline-block text-left">
                <div>
                  <button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </button>
                </div>

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
                              ? "font-medium text-gray-900"
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

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <section
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </button>
                    </h3>
                    <section className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </section>
                  </section>
                ))}
              </div>

              {/* Product grid */}
              <div className="lg:col-span-1">
                {product.products.map((product) => (
                  <div>
                    <Link to={`/products/${product.name}`}>
                      <img
                        src={product.imgUrl}
                        className=" z-10 
                 "
                        alt={product.ame}
                      />
                    </Link>
                    <span className="flex justify-between items-center">
                      <h1 className="py-4 text-md md:text-md font-semibold">
                        {product.name}
                      </h1>
                      <ShoppingBagIcon
                        className="w-5 h-6 cursor-pointer"
                        //   onClick={addToCart}
                      />
                    </span>
                    <h2 className="text-md text-gray-500 font-semibold">
                      $ {product.price}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
