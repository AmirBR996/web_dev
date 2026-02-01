import React, { useState } from "react";
import { register } from "../../api/auth.api";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { first_name, last_name, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const payload = { first_name, last_name, email, password };
      const res = await register(payload);

      console.log("Register success:", res);
      // navigate("/login") or show toast

    } catch (err) {
      setError(
        err?.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl border shadow-sm flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Create your account
        </h2>

        <Input
          label="First Name"
          name="first_name"
          value={first_name}
          onChange={handleChange}
        />

        <Input
          label="Last Name"
          name="last_name"
          value={last_name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-500 font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-white py-3 rounded-lg font-medium
                     hover:bg-red-600 transition disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
    </div>
  );
};

/* Reusable input (clean + scalable) */
const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      {...props}
      required
      className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-500
                 transition"
    />
  </div>
);

export default RegisterForm;
