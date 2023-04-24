"use client";
import { isUserLoggedIn, logoutRequest } from "../utils/login";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    console.log(process.env.API_URL)
    setIsLoggedIn(() => isUserLoggedIn());
  }, []);
  return (
    <>
      <nav className="fixed top-0 flex flex-row h-16 z-40 justify-between items-center  shadow-lg bg-gray-800 text-white w-screen py-3 px-5">
        <h1 className="text-2xl cursor-pointer text-yellow-400 font-bold flex items-center justify-center">
          <Link href="/">ToWP</Link>
        </h1>
        {isLoggedIn ? (
          <button
            className="px-3 py-2 bg-red-600 rounded-md hover:text-white text-black font-bold"
            onClick={() => {
              setIsLoggedIn(false);
              logoutRequest();
            }}
          >
            Logout
          </button>
        ) : (
          <div className="flex flex-row space-x-5">
            <Link href="/register">
              <button className="px-3 py-2  bg-yellow-400 hover:text-white font-bold rounded-md text-black">
                Register
              </button>
            </Link>
            <Link href="/login">
              <button className="px-3 py-2 bg-yellow-400 hover:text-white font-bold rounded-md text-black">
                Login
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
