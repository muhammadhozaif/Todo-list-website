import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [finished, setFinished] = useState(true);
  let [todo, setTodo] = useState("");
  let [editingIndex, setEditingIndex] = useState(null);
  let [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    try {
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAdd() {
    if (todo.trim() === "") return;

    if (editingIndex !== null) {
      setTodos(
        todos.map((item, i) => (i === editingIndex ? { ...item, todo } : item))
      );
      setEditingIndex(null);
    } else {
      setTodos([...todos, { todo, isCompleted: false }]);
    }
    setTodo("");
  }

  function handleEdit(e) {
    let index = Number(e.target.name);
    setTodo(todos[index].todo);
    setEditingIndex(index);
  }

  function handleDelete(e) {
    let index = Number(e.target.name);
    setTodos(todos.filter((todo, i) => index !== i));
  }

  function handleToggle(e) {
    let index = Number(e.target.name);
    setTodos(
      todos.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <div className="container mx-auto my-6 p-4 sm:p-6 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl shadow-lg min-h-[80vh]">
      <div className="addTodo mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-3 text-violet-800">
          Add a Todo
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            placeholder="Enter your task..."
            className="flex-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400 focus:border-violet-500 outline-none transition-all text-sm sm:text-base"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-700 text-white font-bold px-4 sm:px-5 py-2 rounded-lg hover:bg-violet-900 transition-colors shadow-md w-full sm:w-auto"
          >
            {editingIndex !== null ? "Save" : "Add"}
          </button>
        </div>
      </div>

      <div className="flex items-center mb-6 gap-2">
        <input
          type="checkbox"
          checked={finished}
          onChange={() => setFinished(!finished)}
          className="h-5 w-5 accent-violet-600"
        />
        <span className="text-gray-700 font-medium text-sm sm:text-base">
          Show finished
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold mb-4 text-violet-800">
        Your Todos
      </h2>
      <div className="space-y-4">
        {todos.map((item, index) => {
          return (
            (finished || !item.isCompleted) && (
              <div
                key={index}
                className="todo flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={handleToggle}
                    name={index}
                    className="h-5 w-5 accent-violet-600"
                  />
                  <span
                    className={`text-base sm:text-lg break-words ${
                      item.isCompleted
                        ? "line-through text-gray-400"
                        : "text-gray-900"
                    }`}
                  >
                    {item.todo}
                  </span>
                </div>
                <div className="flex gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={handleEdit}
                    name={index}
                    className="bg-violet-600 text-white px-3 sm:px-4 py-1 rounded-lg hover:bg-violet-800 transition-colors shadow-sm w-full sm:w-auto"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    name={index}
                    className="bg-red-500 text-white px-3 sm:px-4 py-1 rounded-lg hover:bg-red-700 transition-colors shadow-sm w-full sm:w-auto"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
