"use client";
import { socket } from "@/utils/socket";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Input = () => {
  const [message, setMessage] = useState<string>("");
  const [token, setToken] = useState<string>("");
  function onClick() {
    if (message.trim() === "") return;
    socket.emit("SEND_MESSAGE", {
      message: message,
      token: token,
    });
    setMessage("");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token!);
  }, []);
  return (
    <div className="">
      {token ? (
        <div className="flex flex-row">
          <input
            role="textbox"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
            contentEditable
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onClick();
              }
            }}
            className="outline-none overflow-x-hidden scrollbar w-full h-14 text-xl   border-none bg-white  text-black p-2"
          ></input>
          <button
            onClick={onClick}
            className="text-white bg-green-700 py-2 px-5"
          >
            <AiOutlineSend />
          </button>
        </div>
      ) : (
        <p className="border-2 py-2 w-full text-white text-xl flex items-center justify-center">
          Login to chat
        </p>
      )}
    </div>
  );
};

export default Input;
