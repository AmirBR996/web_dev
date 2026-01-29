import React from "react";

const Register_Task = () => {
  return (
    <div className="mt-10 max-w-md mx-auto">
      <form className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">

        {/* Title */}
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-[16px] font-semibold">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Crow and the stone"
            required
            className="border border-red-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <label htmlFor="text" className="text-[12px] font-semibold">
            Text
          </label>
          <input
            id="text"
            type="text"
            placeholder="Describe your title"
            required
            className="border border-red-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="priority" className="text-[16px] font-semibold">
            Priority
          </label>
          <input
            id="priority"
            type="text"
            placeholder="High or Low"
            required
            className="border border-red-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
          />
        </div>

        {/* Pinned Toggle */}
        <div className="flex flex-col gap-1">
          <label className="text-[16px] font-semibold">Pinned</label>
          <div className="flex border border-red-500 rounded-md overflow-hidden">
            {/* Yes */}
            <label className="flex-1 cursor-pointer">
              <input type="radio" name="pinned" value="yes" className="peer hidden" required />
              <div className="text-center py-2 bg-gray-200 peer-checked:bg-red-500 peer-checked:text-white hover:bg-gray-300 transition">
                Yes
              </div>
            </label>
            {/* No */}
            <label className="flex-1 cursor-pointer">
              <input type="radio" name="pinned" value="no" className="peer hidden" />
              <div className="text-center py-2 bg-gray-200 peer-checked:bg-red-500 peer-checked:text-white hover:bg-gray-300 transition">
                No
              </div>
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-400 text-white py-3 rounded-md hover:bg-red-500 transition font-semibold"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Register_Task;
