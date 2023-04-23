"use client";
import React, { useEffect, useState } from "react";
import { isUserLoggedIn, loginRequest } from "../../utils/login";
import Link from "next/link";
import { redirect } from "next/navigation";

interface IUserCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
const page = () => {
  const [inputValue, setInputValue] = useState<IUserCredentials>({
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login() {
    if (inputValue.password !== inputValue.passwordConfirmation) return;
    await loginRequest({
      username: inputValue.username,
      password: inputValue.password,
      route: "register",
    }).then(() => setIsLoggedIn(true))
  }

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    if (isLoggedIn) return redirect("/");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col  space-y-4 items-center  mx-auto rounded-md justify-center bg-gray-900 h-screen ">
      <div className="bg-gray-700 w-72 space-y-8 rounded-md p-5">
        <div className="flex space-x-2 items-center  justify-between flex-row">
          <h1 className="text-white hover:text-yellow-400 font-bold ">
            <Link href="/login">Login</Link>
          </h1>
          <h1 className="text-white text-xl border-b-2 border-yellow-400 font-bold ">
            Register
          </h1>
        </div>
        <form className="flex flex-col  space-y-4 mx-auto">
          <input
            onChange={(event) =>
              setInputValue({
                ...inputValue,
                username: event.target.value,
              })
            }
            placeholder="Enter your username"
            value={inputValue.username}
            className="rounded-md cursor-pointer p-2 text-sm outline-0 focus:ring focus:ring-yellow-400"
            type="text"
          />
          <input
            onChange={(event) =>
              setInputValue({
                ...inputValue,
                password: event.target.value,
              })
            }
            placeholder="Enter your password"
            value={inputValue.password}
            className="rounded-md cursor-pointer p-2 text-sm outline-none outline-0 focus:ring focus:ring-yellow-400"
            type="password"
          />
          <input
            onChange={(event) =>
              setInputValue({
                ...inputValue,
                passwordConfirmation: event.target.value,
              })
            }
            value={inputValue.passwordConfirmation}
            placeholder="Confirm your password"
            className="rounded-md cursor-pointer p-2 text-sm outline-none outline-0 focus:ring focus:ring-yellow-400"
            type="password"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
            className="p-3 cursor-pointer bg-yellow-400 rounded-md text-white ml-auto"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;