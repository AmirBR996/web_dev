import React, { useState } from "react";
import { MdOutlinePushPin, MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({
  title = "Task Title",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident neque doloribus nemo officiis mollitia eius corrupti quas.",
  priority = "High",
}) => {
  const [pinned, setPinned] = useState(false);

  const priorityColors = {
    High: "bg-red-100 text-red-700 border-red-500",
    Medium: "bg-red-50 text-red-600 border-red-400",
    Low: "bg-red-50 text-red-500 border-red-300",
  };

  return (
    <div
      className={`w-full max-w-md bg-red-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border-l-4 ${priorityColors[priority]} relative`}
    >
      {/* Pin Icon */}
      <MdOutlinePushPin
        className={`absolute top-4 right-4 text-xl cursor-pointer transition-transform ${
          pinned ? "text-red-600 rotate-45" : "text-red-400"
        } hover:text-red-600`}
        title={pinned ? "Unpin Task" : "Pin Task"}
        onClick={() => setPinned(!pinned)}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
          Task
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[priority]}`}
        >
          {priority}
        </span>
      </div>

      {/* Title */}
      <p className="text-lg font-bold text-red-700 mb-2">{title}</p>

      {/* Content */}
      <p className="text-sm text-red-600 leading-relaxed mb-5">{content}</p>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <MdModeEdit
          title="Edit Task"
          className="text-xl text-green-500 hover:text-green-600 cursor-pointer transition-colors"
        />
        <FaTrashAlt
          title="Delete Task"
          className="text-lg text-red-500 hover:text-red-600 cursor-pointer transition-colors"
        />
      </div>
    </div>
  );
};

export default Card;
