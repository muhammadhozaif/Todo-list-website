import { useState } from "react";
import React from "react";
function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  function handleAdd() {
    setTodos([...todos, todo]);
    setTodo("");
  }
  function handleEdit() {}
  function handleDelete() {}
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
          Add
        </button>
      </div>

      <h2 className="text-lg font-bold">Your Todos</h2>
      {todos.map((item, index) => {
        return (
          <div key={index} className="todos">
            <div className="todo flex">
              <div className="text">{item}</div>
              <div className="buttons">
                <button
                  onClick={handleEdit}
                  className="bg-violet-800 text-sm mx-0.5 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
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
