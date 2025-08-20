import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-violet-700 to-violet-900 text-white py-4 px-6 shadow-md rounded-b-xl">
      <div>
        <span className="font-extrabold text-2xl tracking-wide">TaskFlow</span>
      </div>
    </nav>
  );
}
