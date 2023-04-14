"use client";

import getData from "../utils/fetcher";
import React, { useState, Suspense } from "react";
import YouTube from "react-youtube";

const Screen = () => {
  const [videoID, setVideoID] = useState<string>("IKTgnb1VmOg");

  async function getCurrentVideoId() {
    const data = await getData("api/queue/getCurrentVideoId");
    setVideoID(data.videoId);
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
                controls: 1,
                disablekb: 1,
              },
            }}
            onEnd={() => getCurrentVideoId()}
            videoId={videoID}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Screen;
