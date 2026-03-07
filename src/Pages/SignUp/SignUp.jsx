import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import sign from "../../assets/images/sign/signup.png"

export default function SignUpPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    toast.success("Signup successful! Redirecting...");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      <Toaster position="top-right" />

      {/* Left Side */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-500 mb-6">Let's create your account and start shopping.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Already have an account? <Link to="/login" >
            <span className="text-blue-600 cursor-pointer">Login</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img
          src={sign}
          alt="camping"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
