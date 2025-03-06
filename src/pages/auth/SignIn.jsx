import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useNavigate, Link } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // Email Form Validation
  const schema = yup.object().shape({
    email: yup.string().email().required("Email address required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission for email/password sign up
  const submitHandler = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Login successful", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      navigate("/account");
    } catch (error) {
      console.error("Error logging in", error);
      toast.error("Error logging in", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  // Handle Google Sign In
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Login Successful", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      navigate("/account");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      toast.error("Error Signing In with Google", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };
  // Toggle Password visibility
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center my-4">
      <div className="shadow-lg rounded-md 320:w-[85%] xs:w-[60%] sm:w-[45%] md:w-[45%] lg:w-[35%] xl:w-[28%] 912:w-[40%] 320:p-6 mx-auto p-4">
        <h1 className="font-medium text-3xl text-center text-black">Sign In</h1>
        {/* Email sign in form */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 py-4"
        >
          <input
            type="email"
            className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
            placeholder="Email"
            {...register("email")}
          />
          <p className="pt-2 px-3 md:px-5 text-xs text-red-500">
            {errors?.email?.message}
          </p>

          <span className="text-center relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
              placeholder="Password"
              {...register("password")}
            />
          </span>
          <p className="pt-2 px-3 md:px-5 text-xs capitalize text-red-500">
            {errors?.password?.message}
          </p>

          <div className="px-8 py-2 flex gap-2 items-center">
            <input type="checkbox" onClick={handlePasswordToggle} />
            <label className="font-semibold">Show password</label>
          </div>
          {/* Login Button */}

          <button
            type="submit"
            className="320:w-56 375:w-64 md:w-72 p-2 shadow-md rounded-md text-black text-md font-normal mt-4 mx-auto flex items-center justify-center gap-2"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mb-2">or</p>

        <span className="flex items-center justify-center gap-8 pb-4">
          {/* Google Sign In Button */}
          <button
            className="p-2 320:w-56 375:w-64 md:w-72 mx-auto rounded-md bg-black text-white shadow-md flex items-center justify-center gap-2 font-semibold"
            onClick={signInWithGoogle}
          >
            <img src={googleIcon} className="h-5 " alt="Google Icon" />
            Google
          </button>
        </span>
        <hr />
        <p className="text-sm text-center pt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
