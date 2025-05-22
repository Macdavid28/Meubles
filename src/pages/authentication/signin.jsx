import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleIcon from "@/assets/google_logo.png";
import { useState } from "react";
import { toast, Slide } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Validation Schema
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

  // Email Login
  const submitHandler = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Login successful", {
        autoClose: 500,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        transition: Slide,
      });
      navigate("/");
    } catch (error) {
      toast.error(
        "Error logging in",
        {
          autoClose: 500,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          hideProgressBar: true,
          transition: Slide,
        },
        error
      );
    }
  };

  // Google Login
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
      toast.error(
        "Error Signing In with Google",
        {
          autoClose: 500,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          hideProgressBar: true,
          transition: Slide,
        },
        error
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 md:p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              className="w-full border-b border-black py-3 outline-none"
              placeholder="Email"
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
              className="w-full border-b border-black py-3 outline-none"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors?.password?.message}
            </p>
          </div>

          {/* Toggle Password */}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md shadow-md hover:bg-black/90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm my-4">or</p>

        {/* Google Button */}
        <button
          className="w-full bg-black text-white py-3 rounded-md shadow-md flex items-center justify-center gap-3 font-medium hover:bg-black/90 transition"
          onClick={signInWithGoogle}
        >
          <img src={googleIcon} alt="Google" className="h-5" />
          Sign in with Google
        </button>

        <hr className="my-6" />

        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold underline hover:text-black/70"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
