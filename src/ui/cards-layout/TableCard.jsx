import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import table from "../../data/products.json";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
export const TableCard = () => {
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[95rem] lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {table.products
            .filter((table) => table.category === "table")
            .slice(0, 6)
            .map((table) => (
              <div
                key={table.id}
                className="border-white border-8 rounded-md shadow-md p-4"
              >
                <div>
                  <img alt={table.name} src={table.imgUrl} />
                </div>
                <div className=" flex items-center justify-between my-2">
                  <div>
                    <h3 className="text-md font-semibold text-gray-700">
                      <Link to={`/products/${table.name}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {table.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-md font-semibold text-gray-900">
                    ₦ {table.price.toLocaleString()}
                  </p>
                </div>

                <button
                  className="bg-black text-center w-full justify-center py-2 text-white my-2 rounded-md flex items-center gap-4"
                  onClick={() => {
                    dispatch(
                      cartActions.addToCart({
                        id: table.id,
                        name: table.name,
                        price: table.price.toLocaleString(),
                        imgUrl: table.imgUrl,
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
        <Link to="/table">
          <button className="py-3 px-8 bg-black mb-8 text-white rounded-md text-md font-semibold">
            Show More
          </button>
        </Link>
      </span>
    </div>
  );
};
