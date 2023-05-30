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

  return (
    <section className="lg:w-[32rem] max-h-[52rem]">
      <div
        className="rounded-lg overflow-x-hidden overflow-y-scroll h-[44rem] scroll-smooth  bg-slate-800"
        ref={chatRef}
      >
        {messages?.map((item, index) => {
          return <Message key={index} message={item.message} user={item.user} />;
        })}
      </div>
      <div className="w-full">
        <Input />
      </div>
    </section>
  );
};

export default Chat;
