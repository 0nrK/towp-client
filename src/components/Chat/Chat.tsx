"use client";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Input from "./Input";
import { socket } from "../../utils/socket";
import { IMessage } from "../../types/message";

const Chat = () => {
  const [messages, setMessages  ] = useState<IMessage[]>();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("GET_MESSAGES", (data: any) => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
      setMessages(data);
    });
  }, []);

  return (
    <div className="w-full md:w-96 relative rounded-lg  overflow-y-hidden  h-96  bg-slate-800">
      <div
        ref={chatRef}
        className=" space-y-1 h-5/6  overflow-y-scroll mb-3 scroll-smooth"
      >
        {messages?.map((item, index) => {
          return <Message key={index} message={item.message} user={item.user} />;
        })}
      </div>
      <div className="h-full mt-4">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
