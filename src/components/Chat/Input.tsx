"use client";
import { socket } from "@/utils/socket";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Input = () => {
  const [message, setMessage] = useState<string>("");
  function onClick() {
    socket.emit("SEND_MESSAGE", message);
    setMessage("");
  }
  return (
    <div className=" w-full">
      <div className="flex flex-row">
        <input
          role="textbox"
          onChange={(e: any) => setMessage(e.target.value)}
          value={message}
          contentEditable
          className="outline-none overflow-x-hidden scrollbar w-96 max-h-24   border-none bg-white  text-black p-2"
        ></input>
        <button onClick={onClick} className="text-white bg-green-700 py-2 px-5">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Input;
