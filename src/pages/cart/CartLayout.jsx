import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const CartLayout = ({
  name,
  id,
  price,
  totalPrice,
  quantity,
  imgUrl,
}) => {
  const dispatch = useDispatch();
  // Product Quantity Increment Function
  const increment = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };
  // Product Quantity decrement Function
  const decrement = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  // Product delete Function
  const deleteItemFromCart = () => {
    dispatch(cartActions.deleteItem(id));
    toast.success("Item deleted from cart", {
      autoClose: 500,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      hideProgressBar: true,
    });
  };

  return (
    <div>
      <div className="bg-white shadow-md py-4 my-1 rounded-lg">
        <div className="flex items-center gap-20">
          {/* Product image and name */}
          <div className="flex items-center w-[50%]">
            <div className="">
              <img src={imgUrl} className="h-24 w-24 mx-8 rounded-md" alt="" />
              <button
                className="flex items-center gap-1 mx-8 mt-2"
                onClick={deleteItemFromCart}
              >
                <XMarkIcon className="w-4" /> Remove
              </button>
            </div>
            <span className="block ml-4">
              <p className="p-4 text-sm lg:text-[1rem] font-medium">{name} </p>
              <p className="px-4 text-sm font-medium">
                ₦ {price.toLocaleString()}.00{" "}
              </p>
            </span>
          </div>
          {/* Increment and Decrement product quantity */}
          <span className="block md:flex items-center gap-2 h-10 px-2 lg:px-5 border border-black rounded-md">
            <button>
              <MinusIcon className="w-5" onClick={decrement} />
            </button>
            <p className="p-2 lg:p-4 text-md font-medium">{quantity} </p>
            <button>
              <PlusIcon className="w-5" onClick={increment} />
            </button>
          </span>

          <p className="p-4 text-md font-medium w-32">
            ₦ {totalPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
