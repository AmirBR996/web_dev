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
  <textarea
    id="text"
    placeholder="Describe your title"
    required
    rows={4} // you can adjust the number of visible rows
    className="border border-red-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 resize-none"
  ></textarea>
</div>
{/* Priority */}
<div className="flex flex-col gap-2">
  <label htmlFor="priority" className="text-sm font-semibold text-gray-700">
    Priority
  </label>
  <select
    id="priority"
    name="priority"
    defaultValue="low"
    className="border border-red-400 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition appearance-none bg-white"
  >
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
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
