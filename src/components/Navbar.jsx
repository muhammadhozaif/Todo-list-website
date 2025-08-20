import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-violet-700 to-violet-900 text-white py-3 sm:py-4 px-4 sm:px-6 shadow-md rounded-b-xl">
      <div className="mb-2 sm:mb-0">
        <span className="font-extrabold text-xl sm:text-2xl tracking-wide">
          TaskFlow
        </span>
      </div>
    </nav>
  );
}
