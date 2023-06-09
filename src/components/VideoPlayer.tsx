"use client";
import { socket } from "@/utils/socket";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import "react-toastify/dist/ReactToastify.css";

const VideoPlayer = () => {
  const [videoID, setVideoID] = useState<string>("");
  // const [videoTimerOn, setVideoTimerOn] = useState<boolean>(false);
  const [videoSecond, setVideoSecond] = useState<number>(1);

  const playerRef = useRef<any>(null);
  function onVideoEnds() {
    setVideoID(() => "");
    setVideoSecond(() => 1);
    socket.emit("VIDEO_ENDS");
    socket.emit('FETCH_PLAYLIST')
    socket.on("GET_VIDEO", (data: any) => {
      if (data) {
        setVideoID(() => data?.video?.videoId);
        setVideoSecond(() => data.videoTimer);
      }
    });
  }

  useEffect(() => {
    socket.on("GET_VIDEO", (data: any) => {
      if (data) {
        setVideoID(() => data?.video?.videoId);
        setVideoSecond(() => data.videoTimer);
      }
    });
    socket.on("CURRENT_VIDEO", (data: any) => {
      if (data) {
        setVideoID(() => data?.video?.videoId);
      }
    });
    /* const syncInterval = setInterval(async () => {
      const currentSecond = Math.round(
        await playerRef?.current?.internalPlayer?.getCurrentTime()
      );
      socket.emit("SYNK_VIDEO", currentSecond);
    }, 5000); 

    return () => {
      clearInterval(syncInterval);
    }; */
  }, []);

  /* useEffect(() => {
    const intervalId = setInterval(async () => {
      // Function to be executed every second
      if (videoTimerOn) {
        setVideoSecond((prevCount) => prevCount + 1); // Update count by incrementing by 1
      }
    }, 1000); // 1000ms = 1 second
    setIntervalId(intervalId);
    // Cleanup function to clear the interval when the component unmounts or when count changes
    return () => {
      clearInterval(intervalId);
    };
  }, []); */

  /* seEffect(() => {
    socket.emit("SYNK_VIDEO", videoSecond);
  }, [videoSecond]); */

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
      {videoID ? (
        <YouTube
          ref={playerRef}
          className="yt-player w-[26rem] h-64 md:w-[44rem] md:h-[36rem]  lg:w-[48rem] lg:h-[44rem] select-none"
          iframeClassName="w-full h-full"
          opts={{
            borderRadius: "10px",
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              start: videoSecond,
            },
          }}
          onReady={() => {
            playerRef?.current?.internalPlayer?.playVideo();
          }}
          onPlay={() => {
            // setVideoTimerOn(true);
          }}
          onEnd={() => onVideoEnds()}
          onStateChange={async (e) => {
            // setVideoSecond(0);
            playerRef?.current?.internalPlayer?.playVideo();
          }}
          onError={(err) => console.log("Error:", err)}
          videoId={videoID}
        />
      ) : <div className="w-[26rem] h-64 md:w-[44rem] md:h-[36rem]  lg:w-[48rem] lg:h-[44rem] flex items-center justify-center bg-gray-800 text-white">
        NO VIDEO FOUND
      </div>}
    </div>
  );
};

export default VideoPlayer;
