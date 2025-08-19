import { useState } from "react";
import React from "react";
function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  let [editingIndex, setEditingIndex] = useState(null);
  function handleAdd() {
    if (todo.trim() == "") {
      return;
    }
    if (editingIndex != null) {
      setTodos(
        todos.map((item, i) => (i === editingIndex ? { ...item, todo } : item))
      );
      setEditingIndex(null);
    } else {
      setTodos([...todos, { todo, isCompleted: false }]);
      setTodo("");
    }
  }
  function handleEdit(e) {
    let index = Number(e.target.name);
    setTodo(todos[index].todo);
    setEditingIndex(index);
  }
  function handleDelete(e) {
    let index = Number(e.target.name);
    setTodos(
      todos.filter((todo, i) => {
        return index !== i;
      })
    );
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
    console.log(todo);
  }
  return (
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
      <div className="addTodo">
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          className="bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500 outline-none"
        />
        <button
          onClick={handleAdd}
          className="bg-violet-800 text-sm mx-1 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold"
        >
          Save
        </button>
      </div>

      <h2 className="text-lg font-bold my-5">Your Todos</h2>
      {todos.map((item, index) => {
        return (
          <div key={index} className="todos">
            <div className="todo flex justify-between w-1/2">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={handleToggle}
                name={index}
              />
              <div
                className={`text my-3 cursor-pointer ${
                  item.isCompleted ? "line-through text-gray-400" : "text-black"
                }`}
              >
                {item.todo}
              </div>
              <div className="buttons my-1">
                <button
                  onClick={handleEdit}
                  name={index}
                  className="bg-violet-800 text-sm mx-0.5 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  name={index}
                  className="bg-violet-800 text-sm mx-0.5 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
