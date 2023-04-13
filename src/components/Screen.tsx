"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

const Screen = () => {
  const videoData: string[] = [
    "inRtnmPxxRw",
    "LWBWF2z_d1c",
    "0RGFyih7I7Y",
    "LGRKsd-lrUc",
  ];
  const [videoID, setVideoID] = useState<string[]>(videoData);
  const [videoIDIndex, setVideoIDIndex] = useState<number>(0);
  return (
    <div className="w-full">
      <div className="">
        <YouTube
        className="ytplayer"
          opts={{
            width: "440px",
            height: "440px",
            borderRadius: "10px",
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
            },
          }}
          onEnd={() =>  setVideoIDIndex(videoIDIndex + 1)}
          videoId={videoID[videoIDIndex]}
        />
      </div>
    </div>
  );
};

export default Screen;
