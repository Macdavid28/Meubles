import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import googleIcon from "@/assets/google_logo.png";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().max(20).required("Please input your username"),
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
  } = useForm({ resolver: yupResolver(schema) });

  const submitHandler = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Sign up successful", {
        autoClose: 500,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        transition: Slide,
      });
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up", {
        autoClose: 500,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        transition: Slide,
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Login Successful", {
        autoClose: 500,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        transition: Slide,
      });
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      toast.error("Error Signing In with Google", {
        autoClose: 500,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        transition: Slide,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 md:p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b border-black py-3 outline-none"
              {...register("username")}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors?.username?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border-b border-black py-3 outline-none"
              {...register("email")}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors?.email?.message}
            </p>
          </div>

          {/* Password */}
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border-b border-black py-3 outline-none"
              {...register("password")}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors?.password?.message}
            </p>
          </div>

          {/* Show Password Toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            />
            <label className="text-sm font-medium cursor-pointer">
              Show password
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md shadow-md hover:bg-black/90 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm my-4">or</p>

        {/* Google Sign In */}
        <button
          className="w-full bg-black text-white py-3 rounded-md shadow-md flex items-center justify-center gap-3 font-medium hover:bg-black/90 transition"
          onClick={signInWithGoogle}
        >
          <img src={googleIcon} alt="Google" className="h-5" />
          Sign up with Google
        </button>

        <hr className="my-6" />

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold underline hover:text-black/70"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
