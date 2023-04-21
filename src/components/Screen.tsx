"use client";

import { socket } from "@/utils/socket";
import getData from "../utils/fetcher";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Screen = () => {
  const [videoID, setVideoID] = useState<string>("");

  function onVideoEnds() {
    socket.emit("VIDEO_END");
    socket.on("CURRENT_VIDEO", (data: any) => {
      if (data.videoId) {
        setVideoID(data.videoId);
      } else {
        toast.warning("Something went wrong while fetching video!", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    });
  }

  useEffect(() => {
    socket.on("CURRENT_VIDEO", (data: any) => {
      if (data.videoId) {
        setVideoID(data.videoId);
      } else {
        toast.warning("Something went wrong while fetching current video!", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
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
      <ToastContainer />
      <YouTube
        className="ytplayer"
        opts={{
          width: "384px",
          height: "384px",
          borderRadius: "10px",
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
          },
        }}
        onEnd={onVideoEnds}
        onError={(err) => console.log(err)}
        videoId={videoID}
      />
    </div>
  );
};

export default Screen;
