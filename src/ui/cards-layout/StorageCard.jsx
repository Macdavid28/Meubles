import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import storage from "../../data/products.json";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
export const StorageCard = () => {
  const dispatch = useDispatch();
  const notification = () => {
    toast.success("Added to cart", {
      autoClose: 500,
      hideProgressBar: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[90rem] lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {storage.products
            .filter((storage) => storage.category === "storage")
            .slice(0, 8)
            .map((storage) => (
              <div
                key={storage.id}
                className="border-white border-8 rounded-md shadow-md"
              >
                <div>
                  <img alt={storage.name} src={storage.imgUrl} />
                </div>
                <div className=" flex items-center justify-between my-2">
                  <div>
                    <h3 className="text-md font-semibold text-gray-700">
                      <Link to={`/products/${storage.name}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {storage.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-md font-semibold text-gray-900">
                    $ {storage.price}
                  </p>
                </div>
                <span className="flex items-center gap-2">
                  <button
                    className="bg-black text-center w-[85%] justify-center py-2 text-white my-2 rounded-md flex items-center gap-4"
                    onClick={() => {
                      dispatch(
                        cartActions.addToCart({
                          id: storage.id,
                          name: storage.name,
                          price: storage.price,
                          imgUrl: storage.imgUrl,
                        }),
                        notification()
                      );
                    }}
                  >
                    Add to cart
                    <ShoppingBagIcon className="w-5" />
                  </button>
                  <button className="bg-gray-400 px-4 py-2.5 text-black my-2 rounded-md flex items-center gap-4">
                    <HeartIcon className="w-5" />
                  </button>
                </span>
              </div>
            ))}
        </div>
      </div>
      <Link to="/storage">
        <span className="flex justify-center">
          <button className="py-3 px-8 bg-gray-800 mb-8 text-white rounded-md text-md font-semibold">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
