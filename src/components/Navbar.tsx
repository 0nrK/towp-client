"use client";
import { isUserLoggedIn, logoutRequest } from "../utils/login";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(() => isUserLoggedIn());
  }, []);
  return (
    <>
      <nav className="fixed top-0 flex flex-row select-none h-16 z-40 justify-between items-center  shadow-lg bg-gray-800 text-white w-screen py-3 px-5">
        <h1 className="text-2xl hover:text-white cursor-pointer text-yellow-400 font-bold flex items-center justify-center">
          <Link href="/">ToWP</Link>
        </h1>
        {isLoggedIn ? (
          <button
            className="px-3 py-2 flex flex-row bg-red-600 rounded-md hover:text-white text-black font-bold"
            onClick={() => {
              setIsLoggedIn(false);
              logoutRequest();
            }}
          >
            <div className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </div>
            Logout
          </button>
        ) : (
          <div className="flex flex-row space-x-5">
            <Link href="/register">
              <button className="px-3 py-2 flex flex-row  bg-yellow-400 hover:text-white font-bold rounded-md text-black">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                  </svg>
                </div>
                Register
              </button>
            </Link>
            <Link href="/login">
              <button className="px-3 py-2 flex flex-row  bg-yellow-400 hover:text-white font-bold rounded-md text-black">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                </div>
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
