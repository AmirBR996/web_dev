import React, { useState } from "react";
import { login } from "../../api/auth.api.js";
import { useNavigate } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Eye icons
import {toast} from "react-hot-toast"
export const Login_form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // for displaying login errors
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  setError("");

  try {
    const response = await login(formData);

    if (response?.data?.access_token) {
      // ✅ save token correctly
      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

      // ✅ success toast
      toast.success(
        response?.data?.message || "Login successful"
      );

      navigate("/", { replace: true });
    }
  } catch (err) {
    console.log(err);

    const msg =
      err?.response?.data?.message ||
      "Login failed. Please try again.";

    setError(msg);
    toast.error(msg);
  }
};


  return (
    <div className="mt-10 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">-

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
            className="border border-red-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400 transition"
          />
        </div>

        {/* Password with Eye Toggle */}
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
            className="border border-red-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400 transition w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};
