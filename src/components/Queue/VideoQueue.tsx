"use client";
import { useState, useEffect } from "react";
import QueueDesc from "./QueueDesc";
import getData from "../../utils/fetcher";

const VideoQueue = () => {
  const [whatsNext, setWhatsNext] = useState<any[]>([]);
  async function getWhatsNext() {
    const data = await getData("api/queue/getCurrentVideoId");
    setWhatsNext(data);
  }
  useEffect(() => {
    getWhatsNext();
    console.log(whatsNext)
  }, []);
  return (
    <div className="bg-slate-800 scrollbar rounded-lg w-64 h-96  overflow-y-scroll">
      <div>
        <div className="flex flex-row py-2 px-3  justify-between items-center border-b-2">
          <h1 className="p-3 text-center text-white text-xl font-bold">
            What is next?
          </h1>
          <div className="rounded-md w-8 h-8 cursor-pointer hover:bg-white hover:bg-opacity-20 items-center  flex flex-row">
            <span className="text-white font-bold text-2xl mx-auto">+</span>
          </div>
        </div>{" "}
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
        <QueueDesc />
      </div>
    </div>
  );
};

export default VideoQueue;
