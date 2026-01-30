import React from "react";
import { Link } from "react-router";

const Notfound = () => {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">404 - Not Found</p>

        <Link
          to="/"
          className="mt-2 px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default Notfound;
