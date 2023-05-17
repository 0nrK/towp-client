"use client";
import { useState, useEffect } from "react";
import PlaylistItem from "./PlaylistItem";
import { socket } from "../../utils/socket";
import Image from "next/image";
import { toast } from "react-toastify";
import secondsToHms from "@/utils/moment";

const Playlist = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [playList, setPlayList] = useState<any[]>();
  const [inputValue, setInputValue] = useState<string>("");
  const [videoId, setVideoId] = useState<any>("");
  function onClick() {
    const token = localStorage.getItem('token')
    if (!token) {
      toast.error("You need to be logged in to add a video to the playlist", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'dark',
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
      setInputValue("");
      setIsModalOpen(false);
      return;
    }else{
      socket.emit("ADD_TO_PLAYLIST", {
        id: inputValue,
        token
      });
      setInputValue("");
      setIsModalOpen(false);
    }
  }
  // write a function that takes a youtube video link and returns video id
  function getVideoId(url: string) {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : null;
  }
  useEffect(() => {
    setVideoId(() => getVideoId(inputValue));
  }, [inputValue]);
  useEffect(() => {
    socket.on("GET_PLAYLIST", (data: any) => {
      const formatedData = data.map((video: any) => {
        return { ...video, duration: secondsToHms(video.duration) }
      })
      setPlayList(() => formatedData);
    });
  }, []);
  useEffect(() => {
    setInputValue("");
  }, [isModalOpen]);
  return (
    <div className="bg-slate-800 w-full  h-36  px-5  scrollbar rounded-lg md:w-64 md:h-96  overflow-y-scroll">
      <div>
        <div className="flex flex-row py-2 px-3  justify-between items-center border-b-2">
          <h1 className="p-3 text-center text-white text-sm md:text-xl font-bold">
            What is next?
          </h1>
          <div
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="rounded-md w-8 h-8 select-none  cursor-pointer hover:bg-white hover:bg-opacity-20 items-center  flex flex-row"
          >
            <span className="text-green-500 font-bold text-2xl mx-auto">+</span>
          </div>
        </div>{" "}
        {playList?.map((item, index) => (
          <PlaylistItem
            key={index}
            index={index}
            videoId={item.videoId}
            title={item.title}
            createdBy={item.createdBy}
            duration={item.duration}
          />
        ))}
        {isModalOpen && (
          <>
            <div
              onClick={() => setIsModalOpen(false)}
              className="bg-black left-0  top-0 absolute w-screen h-screen opacity-90 z-40"
            ></div>
            <div>
              <div className="z-50 absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto w-96 rounded-lg h-auto max-h-80 bg-gray-700">
                <div
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  className="font-bold text-white text-xl flex justify-end cursor-pointer mr-3"
                >
                  x
                </div>
                <div className="flex flex-col  space-y-3 w-5/6 h-96 mx-auto">
                  <label className="text-white font-bold">
                    Enter a valid youtube link:
                  </label>
                  <input
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                    className="rounded-md cursor-pointer p-1 outline-none"
                    type="text"
                  />
                  <button
                    onClick={onClick}
                    className="p-3 cursor-pointer bg-green-500 rounded-md text-white ml-auto"
                  >
                    SEND
                  </button>
                  {videoId && (
                    <div className="min-w-48">
                      <Image
                        alt="thumbnail"
                        className="mx-auto rounded-md"
                        width={200}
                        height={200}
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Playlist;
