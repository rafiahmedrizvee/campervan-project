import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { signInWithPopup } from "firebase/auth";


import login from "../../assets/images/sign/login.png";
import { auth, provider } from "../../firebase/firebase.config";

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

    toast.success("Login successful!");

    localStorage.setItem("userEmail", data.email);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      toast.success(`Welcome ${user.displayName}`);

      localStorage.setItem("userEmail", user.email);

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">

      <Toaster position="top-right" />

      {/* Left Side */}
      <div className="flex items-center justify-center p-8">

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text-gray-500 mb-6">
            Let's login to your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
                {...register("email", { required: "Email is required" })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg p-3"
                {...register("password", { required: "Password is required" })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width="20"
            />
            Continue with Google
          </button>

          <p className="text-sm text-gray-500 mt-5">
            You Have No Account?{" "}
            <Link to="/signup">
              <span className="text-blue-600 cursor-pointer">
                Sign Up
              </span>
            </Link>
          </p>

        </div>

      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img
          src={login}
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  );
}