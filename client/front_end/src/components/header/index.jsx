import React from "react";
import { Link, NavLink } from "react-router";
import { IoMdSearch } from "react-icons/io";
import UserProfile from "./user-profile";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-red-400 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-gray-900"
          >
            MyApp
          </Link>

        </div>

        {/* Center: Search */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, teams..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Right: User */}
        <div className="flex items-center gap-4">
          <UserProfile />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
