import sofa from "../../data/products.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
export const SofaCard = () => {
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
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {sofa.products
            .filter((sofa) => sofa.category === "sofa")
            .slice(0, 6)
            .map((sofa) => (
              <div
                key={sofa.id}
                className="border-white border-8 rounded-md shadow-md p-4"
              >
                <div>
                  <img alt={sofa.name} src={sofa.imgUrl} />
                </div>
                <div className=" flex items-center justify-between my-2">
                  <div>
                    <h3 className="text-md font-semibold text-gray-700">
                      <Link to={`/products/${sofa.name}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {sofa.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-md font-semibold text-gray-900">
                    ₦ {sofa.price.toLocaleString()}
                  </p>
                </div>

                <button
                  className="bg-black text-center w-full justify-center py-2 text-white my-2 rounded-md flex items-center gap-4"
                  onClick={() => {
                    dispatch(
                      cartActions.addToCart({
                        id: sofa.id,
                        name: sofa.name,
                        price: sofa.price.toLocaleString(),
                        imgUrl: sofa.imgUrl,
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
        <Link to="/sofa">
          <button className="py-3 px-8 bg-black mb-8 text-white rounded-md text-md font-semibold">
            Show More
          </button>
        </Link>
      </span>
    </div>
  );
};
