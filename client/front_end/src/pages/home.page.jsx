import React from "react";
import Navbar from "../components/header/index.jsx";
import { IoMdAdd } from "react-icons/io";
import Card from "../components/card.jsx";

const Homepage = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      <Navbar />

      {/* Task list */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Add new task button */}
      <button
        title="Add New Task"
        className="h-14 w-14 rounded-full bg-red-500 text-white font-bold flex items-center justify-center fixed bottom-8 right-8 shadow-lg hover:bg-red-600 transition-colors"
      >
        <IoMdAdd size={28} />
      </button>
    </main>
  );
};

export default Homepage;
