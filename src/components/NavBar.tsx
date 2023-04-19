"use client";
import React from "react";

async function NavBar() {
  return (
    <nav className="fixed top-0 flex flex-row  justify-between  shadow-lg bg-gray-800 text-white w-screen py-3 px-5">
      <h1 className="text-2xl text-yellow-400 font-bold flex items-center justify-center">
        ToWP
      </h1>
    </nav>
  );
}

export default NavBar;
