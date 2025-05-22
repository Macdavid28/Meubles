import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/redux/slice/cart-slice";
import {
  ShoppingBagIcon,
  ArrowRightIcon,
  StarIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
export const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 min-h-[33vh] md:py-20 lg:py-11 [884px]:py-1 md:px-16 font-Rubik py-10 xl:mt-0 bg-white">
      <h2 className="text-center text-2xl font-medium mb-6 ">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center text-lg text-gray-700">
          <p>Your cart is currently empty</p>
          <div className="mt-4">
            <Link
              to="/beds"
              className="flex items-center text-gray-500 hover:text-gray-800"
            >
              <ArrowLeftIcon className="w-5" />
              <span className="ml-2">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="hidden md:grid grid-cols-4 gap-2 mb-4 text-sm uppercase text-gray-600">
            <h3 className="pl-2">Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className="text-right pr-2">Total</h3>
          </div>

          <div className="space-y-4">
            {cart.map((cartItem) => (
              <div
                className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center border-t border-gray-300 pt-4"
                key={cartItem.id}
              >
                <div className="flex flex-col items-start md:grid grid-cols-1 xl:flex xl:items-start gap-4">
                  <img
                    src={cartItem.imgUrl}
                    alt={cartItem.name}
                    className="w-30 mr-4"
                  />
                  <div>
                    <h3 className="font-medium ">{cartItem.name}</h3>
                    <button
                      onClick={() =>
                        dispatch(cartActions.deleteItem(cartItem.id))
                      }
                      className="text-sm text-gray-500 hover:text-black mt-2 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-gray-700">
                  ₦{cartItem.price.toLocaleString()}
                </div>
                <div className="flex justify-center border border-gray-300 rounded-md w-32">
                  <button
                    className="px-4 py-2"
                    onClick={() =>
                      dispatch(cartActions.removeFromCart(cartItem.id))
                    }
                  >
                    -
                  </button>
                  <div className="py-2 px-2">{cartItem.quantity}</div>
                  <button
                    onClick={() => {
                      dispatch(
                        cartActions.addToCart({
                          id: cartItem.id,
                          name: cartItem.name,
                          price: cartItem.price,
                        })
                      );
                    }}
                    className="px-4 py-2"
                  >
                    +
                  </button>
                </div>
                <div className="font-bold md:text-right">
                  ₦{(cartItem.price * cartItem.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start mt-8 border-t border-gray-300 pt-6">
            <button
              className="w-full md:w-40 h-10 rounded-md bg-black hover:bg-gray-400 text-white transition-all ease-in-out duration-500 mb-6 md:mb-0 cursor-pointer"
              onClick={() => {
                dispatch(cartActions.clearCart());
                window.scrollTo(0, 0);
              }}
            >
              Clear Cart
            </button>
            <div className="w-full md:w-72 space-y-2">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span className="font-bold">₦ {subtotal.toLocaleString()}</span>
              </div>

              <button className="w-full h-10 bg-gray-400 hover:bg-black  cursor-pointer transition-all ease-in-out duration-500 text-white rounded-md mt-2">
                <Link to="/checkout"> Checkout</Link>
              </button>
              <div className="mt-4">
                <Link
                  to="/shop"
                  className="flex items-center text-gray-500 hover:text-gray-800"
                >
                  <ArrowLeftIcon className="w-5" />
                  <span className="ml-2">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
