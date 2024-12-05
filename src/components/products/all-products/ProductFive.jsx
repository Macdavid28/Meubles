import product from "../../../data/products.json";
import filter from "./../../../assets/filter.svg";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProductFiveLayout } from "../../../ui/product-layout/product-navigation/ProductFiveLayout.jsx";
export const ProductFive = () => {
  const randomItem = product.products.slice().sort(() => {
    return Math.random() - 0.5;
  });
  return (
    <div className="mt-8 font-cinzel">
      <div className="px-8 text-sm flex items-center gap-1">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Products
      </div>
      <h1 className="px-8 pt-12 py-4 text-3xl font-semibold ">
        Products: Page 5
      </h1>

      <div className="p-8 flex justify-between">
        <h3 className="text-xl items-center flex gap-3 ">
          Filters <img src={filter} className="h-4" alt="" />
        </h3>
        <select className="border border-black p-2  text-gray-500 w-36 rounded-md">
          <option value="pricing">Pricing</option>
          <option value="0-100">$0 -100</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="relative px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-12  ">
        {randomItem.slice(13, 25).map((product) => (
          <div>
            <ProductFiveLayout
              name={product.name}
              id={product.id}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </div>
      <span className="flex justify-center items-center gap-2 my-10 ">
        <Link to="/products">
          <ChevronDoubleLeftIcon className="w-4" />
        </Link>
        <Link to="/products/4" >
          <ChevronLeftIcon className="w-4" />
        </Link>
        <Link to="/products">
          <button className="p-2">1</button>
        </Link>
        <Link to="/products/2">
          <button className="p-2">2</button>
        </Link>
        <Link to="/products/3">
          <button className=" p-2">3</button>
        </Link>
        <Link to="/products/4">
          <button className="p-2">4</button>
        </Link>
        <Link to="/products/5">
          <button className=" px-2 py-1 bg-gray-300 rounded-md">5</button>
        </Link>
        <Link to="/products/6">
          <button className="p-2">6</button>
        </Link>
        <Link to="/products/7">
          <button className="p-2">7</button>
        </Link>
        <Link to="/products/6">
          <ChevronRightIcon className="w-4" />
        </Link>
        <Link to="/products/7">
          <ChevronDoubleRightIcon className="w-4" />
        </Link>
      </span>
    </div>
  );
};
