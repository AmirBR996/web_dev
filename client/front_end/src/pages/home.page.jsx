import React, { useState } from "react";
import Navbar from "../components/header/index.jsx";
import { IoMdAdd } from "react-icons/io";
import Card from "../components/card.jsx";
import Register_Task from "../components/forms/task_from.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root"); // for accessibility

const Homepage = () => {
  const [addModal, setAddModal] = useState({
    type: "add",
    data: null,
    isOpen: false
  });
const openAddModal = ()=>{
  setAddModal({
    type : "add",
    data : null,
    isOpen : true
  })
}
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

      {/* Add Task Modal */}
    {/* Add Task Modal */}
<Modal
  isOpen={addModal.isOpen}
  onRequestClose={() => setAddModal({ ...addModal, isOpen: false })}
  contentLabel="Add Task"
  style={{
    overlay: {
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  }}
  className="max-w-lg w-full mx-auto mt-20 bg-white rounded-2xl shadow-lg p-6 outline-none relative"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
>
  {/* Close X button at top-right */}
  <button
    onClick={() => setAddModal({ ...addModal, isOpen: false })}
    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-xl font-bold"
    aria-label="Close modal"
  >
    &times;
  </button>

  <Register_Task />
</Modal>

      {/* Add new task button */}
      <button
        title="Add New Task"
        onClick={openAddModal}
        className="h-14 w-14 rounded-full bg-red-500 text-white font-bold flex items-center justify-center fixed bottom-8 right-8 shadow-lg hover:bg-red-600 transition-colors"
      >
        <IoMdAdd size={28} />
      </button>
    </main>
  );
};

export default Homepage;
