"use client";
import React, { useEffect, useState } from "react";
import { isUserLoggedIn, loginRequest } from "../../utils/login";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";

interface IUserCredentials {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}
const page = () => {
  const [inputValue, setInputValue] = useState<IUserCredentials>({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  async function login() {
    if (inputValue.password !== inputValue.passwordConfirmation) return;
    setIsButtonDisabled(true)
    await loginRequest({
      email: inputValue.email,
      username: inputValue.username,
      password: inputValue.password,
      route: "register",
    })
      .then(() => setIsLoggedIn(true))
      .catch((err) => console.log(err))
      .finally(() => setIsButtonDisabled(false))
  }

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    if (isLoggedIn) return redirect("/");
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col  space-y-4 items-center  mx-auto rounded-md  bg-gray-900 h-screen ">
      <div className="bg-gray-700 my-auto w-96 space-y-8 rounded-md mt-12 py-12 px-5">
        <div className="flex justify-center mx-auto  items-center">
          <Image src="/towp-logo.png" width={100} height={100} alt="ToWPLogo" />
        </div>
        <div className="flex space-x-2 items-center  justify-between flex-row">
          <h1 className="text-white text-2xl hover:text-yellow-400 font-bold ">
            <Link href="/login">Login</Link>
          </h1>
          <h1 className="text-yellow-400 text-2xl border-b-2 border-yellow-400 font-bold ">
            Register
          </h1>
        </div>
        <form className="flex flex-col  text-white space-y-4 mx-auto">
        <div className="flex flex-col">
            <label>Email:</label>
            <input
              onChange={(event) =>
                setInputValue({
                  ...inputValue,
                  email: event.target.value,
                })
              }
              placeholder="Enter your email"
              value={inputValue.email}
              className="rounded-md text-black cursor-pointer p-2 text-md outline-0 focus:ring focus:ring-yellow-400"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label>Username:</label>
            <input
              onChange={(event) =>
                setInputValue({
                  ...inputValue,
                  username: event.target.value,
                })
              }
              placeholder="Enter your username"
              value={inputValue.username}
              className="rounded-md text-black cursor-pointer p-2 text-md outline-0 focus:ring focus:ring-yellow-400"
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
              placeholder="Enter your password"
              value={inputValue.password}
              className="rounded-md text-black cursor-pointer p-2 text-md outline-none outline-0 focus:ring focus:ring-yellow-400"
              type="password"
            />
          </div>
          <div className="flex flex-col">
            <label>Password confirmation:</label>
            <input
              onChange={(event) =>
                setInputValue({
                  ...inputValue,
                  passwordConfirmation: event.target.value,
                })
              }
              value={inputValue.passwordConfirmation}
              placeholder="Confirm your password"
              className="rounded-md text-black cursor-pointer p-2 text-md outline-none outline-0 focus:ring focus:ring-yellow-400"
              type="password"
            />
          </div>
          <button onClick={(e) => {
            e.preventDefault()
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
