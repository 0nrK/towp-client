import React from "react";
import QueueDesc from "./QueueDesc";

const VideoQueue = () => {
  return (
    <div className="bg-slate-800 scrollbar rounded-lg w-64 h-96  overflow-y-scroll">
      <div>
        <h1 className="p-3 text-center py-4  text-white border-b-2 text-xl font-bold">What is next?</h1>
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
