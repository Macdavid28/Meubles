import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
export const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let subTotal = 0;
  let vat = 1500;
  let total = 0;
  cartItems.forEach((item) => {
    subTotal += item.totalPrice;
    total = subTotal + vat;
  });
  const schema = yup.object().shape({
    email: yup.string().email().required("Book"),
    address: yup.string().required(),
    apartment: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    postalCode: yup.number().integer().positive().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const publicKey = "pk_test_c4b61de04038868c2356b4f2dd7de249754b0069";
  const [email, setEmail] = useState("");
  const handleSubmitFunction = () => {};
  const paymentProps = {
    email,
    amount: total * 100,
    metadata: {},
    publicKey,
    text: "Continue",
    onSuccess: () => toast.success("Payment successful"),
    onClose: () => {
      alert("Are you sure you want to close the payment gateway?");
    },
  };

  return (
    <div className="min-h-screen bg-[#F9FAFC] flex flex-col lg:flex-row justify-between">
      {/* Checkout Form */}
      <form className="p-4 py-6" onSubmit={handleSubmit(handleSubmitFunction)}>
        <h1 className="text-2xl font-bold pb-4">Checkout</h1>
        <h1 className="text-xl font-medium">Contact Information</h1>

        <p className="text-sm font-semibold py-2 pt-4">
          Email Address <span className="text-red-500">*</span>
        </p>
        <input
          type="email"
          className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
          {...register("email")}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <span>
          <h1 className="text-xl font-medium py-4">Shipping Address</h1>
          <p className="text-sm font-semibold py-2 pt-4">
            Address <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
            {...register("address")}
          />
          <p className="text-sm font-semibold py-2 pt-4">
            Apartment,Suite, etc. <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
            {...register("apartment")}
          />
          <span className="flex gap-8">
            <span>
              <p className="text-sm font-semibold py-2 pt-4">
                City <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
                {...register("city")}
              />
            </span>
            <span>
              <p className="text-sm font-semibold py-2 pt-4">
                State/Province <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
                {...register("state")}
              />
            </span>
            <span>
              <p className="text-sm font-semibold py-2 pt-4">
                Postal Code <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
                {...register("postalCode")}
              />
            </span>
          </span>
        </span>
        <div className="border-t-2 pb-4 border-black w-full mt-8"></div>
        <PaystackButton
          className="py-2 px-4 text-white bg-gray-400 rounded-md"
          {...paymentProps}
        />
      </form>
      {/* Order Summary */}
      <div className="bg-white p-4 overflow-hidden">
        <h1 className="text-xl py-3 font-bold">Order Summary</h1>
        <div className="border-t-2 pb-2 border-black w-full"></div>
        {cartItems.map((cartItem) => (
          <div className="shadow-sm py-4 my-1 rounded-b-md">
            <div className="flex items-center gap-20">
              {/* Product image and name */}
              <div className="flex items-center w-[60%]">
                <img
                  src={cartItem.imgUrl}
                  className="h-24 w-24 mx-8 rounded-md"
                  alt=""
                />
                <span className="block ml-4">
                  <p className="p-4 text-sm lg:text-[1rem] font-medium">
                    {cartItem.name}
                  </p>
                  <p className="px-4 text-sm font-medium">
                    ₦{" "}
                    {cartItem.price
                      .toLocaleString()
                      .toLocaleString()
                      .toLocaleString()}
                    .00
                  </p>
                </span>
              </div>

              <p className="p-4 text-md font-medium w-32">
                ₦ {cartItem.totalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
        <div className=" bg-white rounded-md p-10 relative h-1/3 ">
          <span className="flex items-center justify-between">
            <p className="text-lg py-2 flex ">Subtotal: </p>
            <p className="text-md">₦ {subTotal.toLocaleString()}.00</p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-lg py-2">Shipping:</p>
            <p className="text-md">Free Shipping</p>
          </span>
          <span className="flex items-center justify-between">
            <p className="text-lg py-2">VAT:</p>
            <p className="text-md">₦ {vat.toLocaleString()}.00</p>
          </span>
          <div className="border-t-[1px] pb-2 border-gray-400 w-full"></div>
          <span className="flex items-center justify-between">
            <h1 className="text-xl py-2 font-bold">Total</h1>
            <p className="text-md font-bold">₦ {total.toLocaleString()}.00</p>
          </span>
        </div>
      </div>
    </div>
  );
};
