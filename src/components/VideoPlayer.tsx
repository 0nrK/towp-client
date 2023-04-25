"use client";
import { socket } from "@/utils/socket";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "react-toastify/dist/ReactToastify.css";

const VideoPlayer = () => {
  const [videoID, setVideoID] = useState<string>("");

  function onVideoEnds() {
    socket.emit("VIDEO_END", () => {
      socket.on("CURRENT_VIDEO", (data: any) => {
        console.log(data);
        if (data) {
          setVideoID(() => data?.videoId);
        }
      });
    });
  }
  useEffect(() => {
    socket.on("VIDEO_END", () => {
      socket.on("CURRENT_VIDEO", (data: any) => {
        console.log(data);
        if (data) {
          setVideoID(() => data.videoId);
        }
      });
    });
    socket.on("CURRENT_VIDEO", (data: any) => {
      if (data) {
        setVideoID(() => data?.videoId);
      }
    });
  }, []);

  if (!videoID)
    return (
      <div className="w-[500px] h-96 flex items-center justify-center bg-gray-800 text-white">
        NO VIDEO FOUND
      </div>
    );
  return (
    <div className="">
      {videoID && (
        <YouTube
          className="ytplayer"
          opts={{
            width: "500px",
            height: "384px",
            borderRadius: "10px",
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
            },
          }}
          onEnd={onVideoEnds}
          onError={(err) => console.log("Error:", err)}
          videoId={videoID}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
