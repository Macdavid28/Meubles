import { toast, Slide } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import xIcon from "@/svg/icons8-twitter-white.svg";
import fbIcon from "@/svg/icons8-facebook-white.svg";
import instaIcon from "@/svg/icons8-instagram-white.svg";
import pinterestIcon from "@/svg/icons8-pinterest-white.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Contact = () => {
  const form = useRef();
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name Required"),
    lastName: yup.string().required("Last Name Required"),
    email: yup.string().email("Invalid Email").required("Email Required"),
    phoneNumber: yup
      .number()
      .positive()
      .integer()
      .required("Phone Number Required"),
    message: yup.string().required("Message Required"),
  });
  const {
    register,
    handleSubmit,

    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const sendMessage = async () => {
    // e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
      reset();
    } catch (error) {
      toast.error("Error sending message", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
      reset();
      console.error("Error sending message", error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear">
      <div className="flex flex-col md:flex-row md:gap-24 md:m-10 shadow-md  rounded-md p-12 bg-linear-to-b md:bg-linear-to-r from-60% from-white to-40% to-black">
        <div>
          <h2 className="text-2xl font-normal pb-5 mx-2">Send Us A Message</h2>
          <form action="" onSubmit={handleSubmit(sendMessage)} ref={form}>
            <div className="grid grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-500 p-2 m-2 outline-none placeholder:font-light placeholder:text-black"
                name="firstName"
                {...register("firstName")}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-500 p-2 m-2 outline-none placeholder:font-light placeholder:text-black"
                name="lastName"
                {...register("lastName")}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-500 p-2 m-2 outline-none placeholder:font-light placeholder:text-black"
                name="email"
                {...register("email")}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-500 p-2 m-2 outline-none placeholder:font-light placeholder:text-black"
                name="phoneNumber"
                {...register("phoneNumber")}
              />

              <textarea
                placeholder="Message"
                className="border border-gray-500 w-[193%] h-full p-2 m-2 placeholder:font-light placeholder:text-black"
                name="message"
                {...register("message")}
              ></textarea>
            </div>
            <button className=" bg-black text-white p-4 rounded-md mx-2 mt-6 font-normal text-md">
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="h-full flex flex-col gap-5 text-white ">
          <h2 className="text-2xl font-normal pb-5 ">Info</h2>
          <p className="text-md">No 245, Baxter Street Embertown</p>
          <p className="text-md">Brexter, 45 Upper Wesson Street</p>
          <p className="text-md">California +1 222 333 4456 </p>
          <p className="text-md">meubles_info@gmail.com </p>
          <ul className="flex gap-6">
            <li className="cursor-pointer">
              <img src={fbIcon} className="h-8 md:h-6" alt="" />
            </li>
            <li className="cursor-pointer">
              <img src={xIcon} className="h-8 md:h-6" alt="" />
            </li>
            <li className="cursor-pointer">
              <img src={pinterestIcon} className="h-8 md:h-6" alt="" />
            </li>
            <li className="cursor-pointer">
              <img src={instaIcon} className="h-8 md:h-6" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
