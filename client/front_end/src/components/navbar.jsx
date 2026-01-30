import React from "react";
import {Link} from "react-router"
const Navbar = () => {
  return (
    <nav className="w-full bg-red-400 text-white px-6 py-4 flex items-center justify-between">
      
      {/* Logo / Brand */}
      <div className="text-xl font-semibold">
        Home
      </div>

      {/* Links */}
      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Services</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <Link to = "/login">
      <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 text-sm">
        Login
      </button> 
      </Link>
    </nav>
  );
};

export default Navbar;
