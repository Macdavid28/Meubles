import chair from "../../data/products.json";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
// import { wishlistActions } from "./../../redux/slices/wishlist-slice";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
export const ChairCard = () => {
  // const itemExists = useSelector((state) => state.wishlist.wishlist);
  // const itemExistsInWishlist = (id) => {
  //   return itemExists.some((item) => item.id === id);
  // };

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
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 ">
          {chair.products
            .filter((chair) => chair.category === "chair")
            .slice(0, 8)
            .map((chair) => (
              <div
                className="border-white border-8 rounded-md shadow-md"
                key={chair.id}
              >
                <div
                  key={chair.id}
                  className="border-8 border-white rounded-md p-4"
                >
                  <div>
                    <img alt={chair.name} src={chair.imgUrl} />
                  </div>
                  <div className=" flex items-center justify-between my-2">
                    <h3 className="text-md font-semibold text-gray-700">
                      <Link to={`/products/${chair.name}`}>{chair.name}</Link>
                    </h3>
                    <p className="text-md font-semibold text-gray-900">
                      $ {chair.price}
                    </p>
                  </div>
                  <span className="flex items-center gap-2">
                    <button
                      className="bg-black text-center w-[85%] justify-center py-2 text-white my-2 rounded-md flex items-center gap-4"
                      onClick={() => {
                        dispatch(
                          cartActions.addToCart({
                            id: chair.id,
                            name: chair.name,
                            price: chair.price,
                            imgUrl: chair.imgUrl,
                          }),
                          notification()
                        );
                      }}
                    >
                      Add to cart
                      <ShoppingBagIcon className="w-5" />
                    </button>
                    <button
                      className="bg-gray-400 px-4 py-2.5 text-black my-2 rounded-md flex items-center gap-4"
                      // onClick={dispatch(
                      //   wishlistActions.toggleWishlist({
                      //     id: chair.id,
                      //     name: chair.name,
                      //     price: chair.price,
                      //     imgUrl: chair.imgUrl,
                      //   })
                      // )}
                    >
                      {/* {itemExistsInWishlist ? ( */}
                        <HeartIcon className="w-5" />
                      {/* ) : ( */}
                        <HeartIconSolid className="w-5" />
                      {/* )} */}
                    </button>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Link to="/chair">
        <span className="flex justify-center">
          <button className="py-3 px-8 bg-black mb-8 text-white rounded-md text-md font-semibold">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
