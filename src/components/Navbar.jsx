import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-700 text-white py-2">
      <div>
        <span className="font-bold text-xl mx-3.5">TaskFlow</span>
      </div>
      <ul className="flex items-center">
        <li className="mx-2">
          <a href="#" className="hover:font-bold transition-all duration-300">
            Home
          </a>
        </li>
        <li className="mx-2">
          <a href="#" className="hover:font-bold transition-all duration-300">
            Your Tasks
          </a>
        </li>
      </ul>
    </nav>
  );
}
