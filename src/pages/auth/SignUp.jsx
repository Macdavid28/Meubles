import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, googleProvider } from "../.././config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // Email Form Validation
  const schema = yup.object().shape({
    username: yup.string().max(20).required("Please input your username"),
    email: yup.string().email().required("Email address required"),
    password: yup.string().min(8).required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission for email/password sign up
  const submitHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("Sign up successful", {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      // navigate("/account");
    } catch (error) {
      console.error("Error signing up", error);
      toast.error("Error signing up", {
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
        <h1 className="font-semibold text-3xl text-center text-black">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 py-4 relative"
        >
          <input
            type="email"
            className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
            placeholder="example@gmail.com"
            {...register("email")}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="pt-2 px-3 md:px-5  text-xs text-red-500">
            {errors?.email?.message}
          </p>

          <input
            type={showPassword ? "text" : "password"}
            className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
            placeholder="Password"
            {...register("password")}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="pt-2 px-3 md:px-5 text-xs capitalize text-red-500">
            {errors?.password?.message}
          </p>

          <div className="px-8 py-2 flex gap-2 items-center">
            <input type="checkbox" onClick={handlePasswordToggle} />
            <label className="font-semibold">Show password</label>
          </div>
          <button
            type="submit"
            className="320:w-56 375:w-64 md:w-72 p-2 shadow-md rounded-md text-black text-md font-semibold mt-4 mx-auto flex items-center justify-center gap-2"
          >
            Register
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
          Already have an account?{" "}
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
