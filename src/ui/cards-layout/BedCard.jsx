import bed from "../../data/products.json";
import { Link } from "react-router-dom";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
export const BedCard = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[82rem] lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {bed.products
            .filter((bed) => bed.category === "beds")
            .slice(0, 8)
            .map((bed) => (
              <div
                key={bed.id}
                className="group relative border border-gray-500 rounded-md p-4"
              >
                <div>
                  <img alt={bed.name} src={bed.imgUrl} />
                </div>
                <div className=" flex items-center justify-between my-2">
                  <div>
                    <h3 className="text-md font-semibold text-gray-700">
                      <Link to={`/products/${bed.name}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {bed.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-md font-semibold text-gray-900">
                    $ {bed.price}
                  </p>
                </div>
                <span className="flex items-center gap-2">
                  <button className="bg-gray-800 text-center w-[85%] justify-center py-2 text-white my-2 rounded-md flex items-center gap-4">
                    Add to cart
                    <ShoppingBagIcon className="w-5" />
                  </button>
                  <button className="bg-gray-800 px-4 py-2.5 text-white my-2 rounded-md flex items-center gap-4">
                    <HeartIcon className="w-5" />
                  </button>
                </span>
              </div>
            ))}
        </div>
      </div>
      <Link to="/beds">
        <span className="flex justify-center">
          <button className="py-3 px-8 bg-gray-800 mb-8 text-white rounded-md text-md font-semibold">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
