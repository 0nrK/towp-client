"use client";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Input from "./Input";
import { socket } from "../../utils/socket";
import { IMessage } from "../../types/message";

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>();
  const chatRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight + 500;
    }
    socket.on("GET_MESSAGES", (data: any) => {
      setMessages(() => data);
    });
    socket.on('USER_BANNED', (data: any) => {
      setMessages((prevMessages) => [...prevMessages as [], { user: 'System', message: data }])
    })
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight + 500;
    }
  }, [messages]);

  if (!messages) return <p className="text-2xl text-white"> Loading...</p>

  return (
    <section className="w-full md:w-96 max-h-[24rem]">
      <div
        className=" rounded-lg  overflow-y-scroll max-h-[20rem]  h-full scroll-smooth  bg-slate-800"
        ref={chatRef}
      >
        {messages?.map((item, index) => {
          return <Message key={index} message={item.message} user={item.user} />;
        })}
      </div>
      <div className="h-[4rem] mt-4">
        <Input />
      </div>
    </section>
  );
};

export default Chat;
