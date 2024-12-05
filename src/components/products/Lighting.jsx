import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import filter from "../../assets/filter.svg";
import lighting from "../../data/products.json";
import { LightingLayout } from "../../ui/product-layout/LightingLayout";
export const Lighting = () => {
  return (
    <div className="mt-8 font-cinzel">
      <div className="px-8 text-sm flex items-center gap-1">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Lighting
      </div>
      <h1 className="px-8 pt-12 text-xl font-semibold">Products: Lighting </h1>
      <div className="p-8 flex justify-between">
        <h3 className="text-xl items-center flex gap-3">
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
      <div className="relative px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {lighting.products
          .filter((lighting) => lighting.category === "lighting")
          .map((light) => (
            <div>
              <LightingLayout
                name={light.name}
                id={light.id}
                price={light.price}
                imgUrl={light.imgUrl}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
