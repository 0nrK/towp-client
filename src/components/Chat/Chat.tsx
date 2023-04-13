import React from "react";
import Message from "./Message";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="w-96 relative rounded-lg   overflow-y-auto h-full bg-slate-800">
      <Message />
      <Input />
    </div>
  );
};

export default Chat;
