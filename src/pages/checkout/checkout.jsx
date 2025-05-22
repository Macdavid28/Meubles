import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PaystackConsumer } from "react-paystack";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast, Slide } from "react-toastify";

export const Checkout = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      setData(res);
    } catch (error) {
      toast.error("Error fetching data: " + error.message, {
        autoClose: 500,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        transition: Slide,
      });
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  let subTotal = 0;
  let vat = 1500;
  let total = 0;
  cartItems.forEach((item) => {
    subTotal += item.totalPrice;
    total = subTotal + vat;
  });

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    address: yup.string().required("Address is required"),
    apartment: yup.string().required("Apartment details are required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    postalCode: yup
      .number()
      .typeError("Postal Code must be a number")
      .integer()
      .positive()
      .required("Postal Code is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const publicKey = "pk_test_c4b61de04038868c2356b4f2dd7de249754b0069";

  const onSubmit = (data, initializePayment) => {
    const paymentProps = {
      email: data.email,
      amount: total * 100,
      metadata: {
        address: data.address,
        apartment: data.apartment,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
      },
      publicKey,
      onSuccess: () =>
        toast.success("Payment successful", {
          autoClose: 500,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          hideProgressBar: true,
          transition: Slide,
        }),
      onClose: () => {
        alert("Are you sure you want to close the payment gateway?");
      },
    };

    initializePayment(paymentProps);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFC] flex justify-center items-start">
      <form className="w-full max-w-[100%] bg-white p-6">
        <h1 className="text-2xl font-bold pb-4">Checkout</h1>
        <h1 className="text-xl font-medium">Contact Information</h1>

        {/* Email */}
        <p className="text-sm font-semibold py-2 pt-4">
          Email Address <span className="text-red-500">*</span>
        </p>
        <input
          type="email"
          className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
          {...register("email")}
        />
        <p className="text-red-500 text-xs">{errors.email?.message}</p>

        <h1 className="text-xl font-medium py-4">Shipping Address</h1>

        {/* Address */}
        <p className="text-sm font-semibold py-2 pt-4">
          Address <span className="text-red-500">*</span>
        </p>
        <input
          type="text"
          className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
          {...register("address")}
        />
        <p className="text-red-500 text-xs">{errors.address?.message}</p>

        {/* Apartment */}
        <p className="text-sm font-semibold py-2 pt-4">
          Apartment / Suite Number <span className="text-red-500">*</span>
        </p>
        <input
          type="text"
          className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
          {...register("apartment")}
        />
        <p className="text-red-500 text-xs">{errors.apartment?.message}</p>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-semibold py-2 pt-4">
              City <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
              {...register("city")}
            />
            <p className="text-red-500 text-xs">{errors.city?.message}</p>
          </div>
          <div>
            <p className="text-sm font-semibold py-2 pt-4">
              State <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
              {...register("state")}
            />
            <p className="text-red-500 text-xs">{errors.state?.message}</p>
          </div>
          <div>
            <p className="text-sm font-semibold py-2 pt-4">
              Postal Code <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="border border-[#D4D4D4] p-2 w-full bg-transparent rounded-md"
              {...register("postalCode")}
            />
            <p className="text-red-500 text-xs">{errors.postalCode?.message}</p>
          </div>
        </div>

        <div className="border-t-2 pb-4 border-black w-full mt-8"></div>

        {/* Paystack Trigger */}
        <PaystackConsumer
          {...{
            email: getValues("email"),
            amount: total * 100,
            metadata: {
              address: getValues("address"),
              apartment: getValues("apartment"),
              city: getValues("city"),
              state: getValues("state"),
              postalCode: getValues("postalCode"),
            },
            publicKey,
            onSuccess: () =>
              toast.success("Payment successful", {
                autoClose: 500,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                hideProgressBar: true,
                transition: Slide,
              }),
            onClose: () => {
              alert("Are you sure you want to close the payment gateway?");
            },
          }}
        >
          {({ initializePayment }) => (
            <button
              type="button"
              onClick={handleSubmit((data) =>
                onSubmit(data, initializePayment)
              )}
              className="w-full md:w-auto py-3 px-6 text-white bg-gray-700 hover:bg-gray-800 rounded-md mt-6 transition duration-300"
            >
              Pay Now
            </button>
          )}
        </PaystackConsumer>
      </form>
    </div>
  );
};
