import { useState } from "react";
import React from "react";
function App() {
  return (
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
      <div className="addTodo">
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <input
          type="text"
          className="bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500 outline-none"
        />
        <button className="bg-violet-800 text-sm mx-1 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold">
          Add
        </button>
      </div>

      <h2 className="text-lg font-bold">Your Todos</h2>
      <div className="todos">
        <div className="todo flex">
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          </div>
          <div className="buttons">
            <button className="bg-violet-800 text-sm mx-0.5 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold">
              Add
            </button>
            <button className="bg-violet-800 text-sm mx-0.5 hover:bg-violet-950 p-2 py-1 rounded-md text-white font-bold">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
