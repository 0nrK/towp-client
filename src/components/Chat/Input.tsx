import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Input = () => {
  return (
    <div className="absolute w-full  bottom-0">
      <div className="flex flex-row">
        <span
          role="textbox"
          contentEditable
          className="outline-none overflow-x-hidden scrollbar w-96 max-h-24   border-none bg-white  text-black p-2"
        ></span>
        <button className=" text-white bg-green-700 py-2 px-5">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Input;
