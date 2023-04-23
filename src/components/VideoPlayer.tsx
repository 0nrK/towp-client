"use client";
import { socket } from "@/utils/socket";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "react-toastify/dist/ReactToastify.css";

const VideoPlayer = () => {
  const [videoID, setVideoID] = useState<string>("");
  function onVideoEnds() {
    socket.emit("VIDEO_END");
    socket.on("CURRENT_VIDEO", (data: any) => {
      if (data) {
        setVideoID(data.videoId);
      }
    });
  }

  useEffect(() => {
    socket.on("CURRENT_VIDEO", (data: any) => {
      if (data) {
        setVideoID(data?.videoId);
      }
    });
  }, []);

  if (!videoID)
    return (
      <div className="w-96 h-96 flex items-center justify-center bg-gray-800 text-white">
        NO VIDEO FOUND
      </div>
    );
  return (
    <div className="">
      <YouTube
        className="ytplayer"
        opts={{
          width: "384px",
          height: "384px",
          borderRadius: "10px",
          playerVars: {
            autoplay: 1,
            controls: 1,
            disablekb: 1,
          },
        }}
        onEnd={onVideoEnds}
        onError={(err) => console.log("Error:", err)}
        videoId={videoID}
      />
    </div>
  );
};

export default VideoPlayer;
