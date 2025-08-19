import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-violet-700 to-violet-900 text-white py-4 px-6 shadow-md rounded-b-xl">
      {/* Logo / Brand */}
      <div>
        <span className="font-extrabold text-2xl tracking-wide">TaskFlow</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6">
        <li>
          <a
            href="#"
            className="relative hover:text-violet-300 transition-colors duration-300 font-medium"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative hover:text-violet-300 transition-colors duration-300 font-medium"
          >
            Your Tasks
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
