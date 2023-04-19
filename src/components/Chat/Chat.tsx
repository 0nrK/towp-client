"use client";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Input from "./Input";
import { socket } from "../../utils/socket";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>();
  const chatRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    socket.on("GET_MESSAGES", (data: any) => {
      setMessages(() => data);
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    });
  }, []);

  return (
    <div className="w-96 relative rounded-lg  overflow-y-hidden  h-96  bg-slate-800">
      <div
        ref={chatRef}
        className=" space-y-1 h-5/6  overflow-y-scroll scroll-smooth"
      >
        {messages?.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
      <div className="h-full">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
