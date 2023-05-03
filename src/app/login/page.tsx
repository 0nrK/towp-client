"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isUserLoggedIn, loginRequest } from "../../utils/login";
import Image from "next/image";

interface IUserCredentials {
  username: string;
  password: string;
}
const page = () => {
  const [inputValue, setInputValue] = useState<IUserCredentials>({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login() {
    await loginRequest({
      username: inputValue.username,
      password: inputValue.password,
      route: "login",
    })
      .then((res) => console.log(res))
      .then(() => setIsLoggedIn(true))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    setIsLoggedIn(() => isUserLoggedIn());
    if (isLoggedIn) return redirect("/");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col  space-y-4 items-center  mx-auto rounded-md justify-center bg-gray-900 h-screen ">
      <div className="bg-gray-700 w-72 space-y-8 rounded-md p-5">
        <div className="flex justify-center  items-center">
          <Image src="/towp-logo.png" width={50} height={50} alt="ToWPLogo" />
        </div>
        <div className="flex space-x-2 items-center  w-full justify-between flex-row">
          <h1 className="text-yellow-400 text-xl border-b-2 border-yellow-400 font-bold ">
            Login
          </h1>
          <h1 className="text-white hover:text-yellow-400 font-bold ">
            <Link href="/register">Register</Link>
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
            className="rounded-md text-sm cursor-pointer p-2 outline-none outline-0 focus:ring focus:ring-yellow-400"
            type="text"
          />
          <input
            onChange={(event) =>
              setInputValue({
                ...inputValue,
                password: event.target.value,
              })
            }
            value={inputValue.password}
            placeholder="Enter your password"
            className="rounded-md text-sm cursor-pointer p-2 outline-none outline-0 focus:ring focus:ring-yellow-400"
            type="password"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              login();
            }}
            className="p-3 cursor-pointer hover:text-black bg-yellow-400 rounded-md text-white ml-auto"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
