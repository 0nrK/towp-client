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
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  async function login() {
    setIsButtonDisabled(true)
    await loginRequest({
      username: inputValue.username,
      password: inputValue.password,
      route: "login",
    })
      .then((res) => console.log(res))
      .then(() => setIsLoggedIn(true))
      .catch((err) => console.log(err))
      .finally(() => setIsButtonDisabled(false))
  }
  useEffect(() => {
    setIsLoggedIn(() => isUserLoggedIn());
    if (isLoggedIn) return redirect("/");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col  space-y-4 items-center  mx-auto rounded-md  bg-gray-900 h-screen ">
      <div className="bg-gray-700 w-96 py-12 space-y-8 rounded-md px-5 mt-12">
        <div className="flex justify-center  items-center">
          <Image src="/towp-logo.png" width={100} height={100} alt="ToWPLogo" />
        </div>
        <div className="flex space-x-2 items-center  w-full my-auto justify-between flex-row">
          <h1 className="text-yellow-400 text-2xl border-b-2 border-yellow-400 font-bold ">
            Login
          </h1>
          <h1 className="text-white text-2xl hover:text-yellow-400 font-bold ">
            <Link href="/register">Register</Link>
          </h1>
        </div>
        <form className="flex flex-col text-white space-y-4 mx-auto">
          <div className="flex flex-col">
            <label htmlFor='username'>Username:</label>
            <input
              name="username"
              onChange={(event) =>
                setInputValue({
                  ...inputValue,
                  username: event.target.value,
                })
              }
              placeholder="Enter your username"
              value={inputValue.username}
              className="rounded-md text-md text-black cursor-pointer p-2 outline-none outline-0 focus:ring focus:ring-yellow-400"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              onChange={(event) =>
                setInputValue({
                  ...inputValue,
                  password: event.target.value,
                })
              }
              value={inputValue.password}
              placeholder='Enter your password'
              className="rounded-md text-md text-black cursor-pointer p-2 outline-none outline-0 focus:ring focus:ring-yellow-400"
              type="password"
            />
            <span className="font-bold ml-auto text-sm text-white hover:text-yellow-400 cursor-pointer">Forgot Password?</span>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              login();
            }}
            disabled={isButtonDisabled}
            className={`${isButtonDisabled ? `bg-gray-400 cursor-progress` : `bg-yellow-400 cursor-pointer`} p-3 w-full font-bold hover:text-white  rounded-md text-black ml-auto`}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
