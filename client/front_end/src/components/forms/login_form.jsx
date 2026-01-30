import React, { useState } from "react";

export const Login_form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="Email">Email</label>
          <input
            className="border px-2 py-2.5 border-red-500 rounded-md focus:outline-red-700"
            id="Email"
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="Password">Password</label>
          <input
            className="border px-2 py-2.5 border-red-500 rounded-md focus:outline-red-700"
            id="Password"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3.5 rounded-md hover:bg-red-600"
        >
          Login
        </button>

      </form>
    </div>
  );
};
