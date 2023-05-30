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
    <section className="w-[26rem] lg:w-[32rem] h-[42rem]">
      <div
        className="rounded-lg w-full overflow-x-hidden overflow-y-scroll h-full scroll-smooth  bg-slate-800"
        ref={chatRef}
      >
        <div className="w-full">
        {messages?.map((item, index) => {
          return <Message key={index} message={item.message} user={item.user} />;
        })}
        </div>
      </div>
      <div className="w-full mt-3">
        <Input />
      </div>
    </section>
  );
};

export default Chat;
