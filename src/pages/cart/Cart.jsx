import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartLayout } from "./CartLayout";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let subTotal = 0;
  let vat = 20000;
  let total = 0;
  cartItems.forEach((item) => {
    subTotal += item.totalPrice;
    total = subTotal + vat;
  });

  return (
    <div>
      {/* Conditional rendering for cart */}
      {cartItems.length === 0 ? (
        /* When Cart is Empty*/
        <div className="bg-[#F5F5F5] min-h-screen flex flex-col justify-center items-center">
          <div className="block text-center md:p-32 py-32">
            <h1 className="text-black text-md text-3xl font-bold p-3">
              Cart Empty
            </h1>
            <Link to="/products">
              <button className="w-52 h-12 bg-gray-400 rounded-md text-white text-sm font-normal uppercase m-4 ">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        /* When cart has an item */
        <div className="bg-[#f8f7f4] overflow-hidden">
          <h1 className="text-3xl font-bold pt-10 mx-14">Your Cart</h1>
          <div className=" xl:flex gap-12 py-8 px-14">
            <div>
              {cartItems.map((cartItem, index) => (
                <div key={index}>
                  <CartLayout
                    name={cartItem.name}
                    price={cartItem.price}
                    id={cartItem.id}
                    imgUrl={cartItem.imgUrl}
                    totalPrice={cartItem.totalPrice}
                    quantity={cartItem.quantity}
                  />
                </div>
              ))}
            </div>
            {/* Cart Totals */}
            <div className=" bg-white rounded-md p-10 relative h-1/3 ">
              <h1 className="text-xl py-3 font-bold">Order Summary</h1>
              <div className="border-t-2 pb-2 border-black w-full"></div>
              <span className="flex items-center justify-between">
                <h2 className="text-lg py-2 flex ">Subtotal: </h2>
                <p className="text-md">₦ {subTotal.toLocaleString()}.00</p>
              </span>
              <span className="flex items-center justify-between">
                <h2 className="text-lg py-2">Shipping:</h2>
                <p className="text-md"> Free </p>
              </span>
              <span className="flex items-center justify-between">
                <h2 className="text-lg py-2">VAT:</h2>
                <p className="text-md">₦ {vat.toLocaleString()}.00</p>
              </span>
              <div className="border-t-[1px] pb-2 border-gray-400 w-full"></div>
              <span className="flex items-center justify-between">
                <h1 className="text-xl py-2">Total</h1>
                <p className="text-md">₦ {total.toLocaleString()}.00</p>
              </span>
              <Link to="/checkout">
                <button className="px-10 py-2 bg-gray-400 text-white text-md rounded-md m-2">
                  Proceed To Checkout
                </button>
              </Link>
              <span className="flex justify-center gap-2 items-center">
                or
                <Link to="/products" className="underline text-sm">
                  Continue Shopping
                </Link>
                <ArrowRightIcon className="w-3" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
