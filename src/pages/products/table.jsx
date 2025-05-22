import product from "@data/products.json";
import {
  ChevronRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "@/redux/slice/cart-slice";
import { toast, Slide } from "react-toastify";
import Select from "react-select";
import filter from "@/assets/filter.png";
export const Table = () => {
  const dispatch = useDispatch();
  const notification = () => {
    toast.success("Added to cart", {
      autoClose: 500,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
      transition: Slide,
    });
  };
  const options = [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Pricing: High to low",
      value: "pricing: high to low",
    },
    {
      label: "Pricing: Low to High",
      value: "pricing: low to high",
    },
  ];
  const customStyle = {
    control: (style) => ({
      ...style,
      width: "180px",
    }),
  };
  const [sortOption, setSortOption] = useState(options[0]);

  const filtered = useMemo(() => {
    const sorted = [...product.products];
    if (sortOption.value === "pricing: low to high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption.value === "pricing: high to low") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => a - b);
    }
    return sorted;
  }, [sortOption]);

  return (
    <div className="py-4 bg-white">
      <div className="flex items-center gap-2 mt-4 mx-4 text-sm">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Table
      </div>
      <h1 className="text-3xl px-4 text-black my-6 font-semibold ">Table</h1>
      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={filter} className="h-6" alt="" />
          <h3 className="text-xl">FILTER</h3>
        </div>
        <Select
          value={sortOption}
          onChange={setSortOption}
          options={options}
          styles={customStyle}
        />
      </div>

      <div className="flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4 sm:mx-14 px-4 md:mx-0 lg:px-4">
          {filtered
            .filter((product) => product.category === "table")
            .map((product) => (
              <div
                className="relative border border-white rounded-md"
                key={product.id}
              >
                <div className="border border-white rounded-md shadow-sm shadow-black p-4">
                  <Link to={`/products/${product.name}`}>
                    <img src={product.imgUrl} alt={product.name} />
                  </Link>
                  <span className="flex items-center justify-between">
                    <h1 className="text-xs lg:text-lg font-semibold">
                      {product.name}
                    </h1>
                    <ShoppingCartIcon
                      className="bg-black text-white rounded-full p-2 w-10  cursor-pointer hover:bg-black/80"
                      onClick={() => {
                        dispatch(
                          cartActions.addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            imgUrl: product.imgUrl,
                          }),
                          notification()
                        );
                      }}
                    />
                  </span>
                  <h3 className="text-xs lg:text-lg text-gray-500 font-normal">
                    ₦ {product.price.toLocaleString()}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
