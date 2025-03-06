import bed from "../../data/products.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
export const BedCard = () => {
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[82rem] lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {bed.products
            .filter((bed) => bed.category === "beds")
            .slice(0, 6)
            .map((bed) => (
              <div
                key={bed.id}
                className="border-white border-8 rounded-md shadow-md p-4"
              >
                <div>
                  <img alt={bed.name} src={bed.imgUrl} />
                </div>
                <div className=" flex items-center justify-between my-2">
                  <div>
                    <h3 className="text-md lg:text-md font-semibold text-gray-700">
                      <Link to={`/products/${bed.name}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {bed.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-md lg:text-md font-semibold text-gray-900">
                    S {bed.price.toLocaleString()}
                  </p>
                </div>

                <button
                  className="bg-black text-center w-full justify-center py-2 text-white my-2 rounded-md flex items-center gap-4"
                  onClick={() => {
                    dispatch(
                      cartActions.addToCart({
                        id: bed.id, // Fixed 'chair' to 'bed'
                        name: bed.name,
                        price: bed.price.toLocaleString(),
                        imgUrl: bed.imgUrl,
                      }),
                      notification()
                    );
                  }}
                >
                  Add to cart
                  <ShoppingBagIcon className="w-5" />
                </button>
              </div>
            ))}
        </div>
      </div>
      <span className="flex justify-center">
        <Link to="/beds">
          <button className="py-3 px-8 bg-black mb-8 text-white rounded-md text-md font-semibold">
            Show More
          </button>
        </Link>
      </span>
    </div>
  );
};
