import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const AddTaskForm = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newTask = {
      title,
      description,
      dueDate,
      category,
      email: user?.email,
    };

    try {
      const res = await axios.post("http://localhost:3000/tasks", newTask);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Task Added Successfully",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setTitle("");
        setDescription("");
        setCategory("To-Do");
      }
    } catch (err) {
      Swal.fire({
        title: "Error Adding Task",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-lg p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Add New Task
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <div className="flex gap-4">
            <select
              className="w-1/2 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <input
              type="date"
              className="w-1/2 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
