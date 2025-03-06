import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
export const CartPreview = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let subTotal = 0;
  cartItems.forEach(function (total) {
    subTotal += total.totalPrice;
  });
  const isCartOpen = useSelector((state) => state.cart.showCartPreview);
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(cartActions.hideCart());
  };
  return (
    <div
      className={`fixed top-0 right-0 768:w-[55%] md:w-[50%] lg:w-[35%] h-full z-50 bg-white shadow-md transition-opacity duration-300 ease-in-out" ${
        isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="flex justify-between items-center p-4">
        <span>
          <h1 className="text-md font-semibold text-black py-3">
            Shopping Cart
          </h1>
          <Link to="/cart" className="text-md  " onClick={closeCartHandler}>
            View Cart
          </Link>
          <div className="border-t-2 border-black w-[4.8rem] "></div>
        </span>
        <XMarkIcon className="w-8 cursor-pointer" onClick={closeCartHandler} />
      </span>
      <div className="overflow-y-auto h-[calc(90vh-200px)] px-4">
        {cartItems.map((cartItem) => (
          <div className="flex flex-col p-4 justify-between">
            <span className="flex items-center gap-8">
              <span>
                <img src={cartItem.imgUrl} className="h-24 rounded-md" alt="" />
                <button
                  className="flex gap-1 py-2"
                  onClick={() =>
                    dispatch(
                      cartActions.deleteItem(cartItem.id),
                      toast.success("Item deleted from cart", {
                        autoClose: 500,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        hideProgressBar: true,
                      })
                    )
                  }
                >
                  <XMarkIcon className="w-4" />
                  <p className="text-xs">Remove</p>
                </button>
              </span>

              <span>
                <h2 className="text-sm">{cartItem.name}</h2>
                <h2 className="py-2 font-medium text-sm">
                  Quantity: {cartItem.quantity}{" "}
                </h2>
                <h2 className="text-sm">
                  ₦ {cartItem.price.toLocaleString()}{" "}
                </h2>
              </span>
            </span>
          </div>
        ))}
      </div>
      <span className="flex px-8 py-4 justify-between">
        <h1 className="font-bold">Subtotal:</h1>
        <h2 className="font-bold"> ₦ {subTotal.toLocaleString()} </h2>
      </span>
      <div className="border-t-2 pb-4  border-black w-[88%] mx-auto"></div>
      <button className="p-2 w-[50%] block font-bold text-md text-center mx-7 bg-gray-400 rounded-md">
        Checkout
      </button>
    </div>
  );
};
