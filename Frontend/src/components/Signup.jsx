import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await fetch("http://localhost:4001/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      const responseData = await res.json();
      console.log("Signup Response:", responseData);

      if (res.ok) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(responseData.user));
        navigate("/");
      } else {
        toast.error(responseData.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 shadow-md p-5 rounded-md relative w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg text-center">Signup</h3>

          {/* Name */}
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your fullName"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
          >
            Signup
          </button>

          {/* Login Link */}
          <p className="text-center text-sm">
            Have an account?{" "}
            <button
              type="button"
              className="text-blue-500 underline"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
