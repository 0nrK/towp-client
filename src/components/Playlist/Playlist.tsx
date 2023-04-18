"use client";
import { useState, useEffect } from "react";
import PlaylistItem from "./PlaylistItem";
import { socket } from "../../utils/socket";

const Playlist = () => {
  const [whatsNext, setWhatsNext] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [playList, setPlayList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  function onClick() {
    socket.emit("ADD_TO_PLAYLIST", inputValue);
    setInputValue("")
    setIsModalOpen(false);
  }
  useEffect(() => {
    socket.on("PLAYLIST", (data: any) => {
      setPlayList(data);
    });
    socket.on('FAIL', (data: any) => {
      console.log(data)
    })
  }, [playList]);
  return (
    <div className="bg-slate-800 scrollbar rounded-lg w-64 h-96  overflow-y-scroll">
      <div>
        <div className="flex flex-row py-2 px-3  justify-between items-center border-b-2">
          <h1 className="p-3 text-center text-white text-xl font-bold">
            What is next?
          </h1>
          <div
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="rounded-md w-8 h-8 select-none  cursor-pointer hover:bg-white hover:bg-opacity-20 items-center  flex flex-row"
          >
            <span className="text-green-500 font-bold text-2xl mx-auto">+</span>
          </div>
        </div>{" "}
        {playList.map((item, index) => (
          <PlaylistItem key={index} title={item} />
        ))}
        {isModalOpen && (
          <>
            <div
              onClick={() => setIsModalOpen(false)}
              className="bg-black left-0  top-0 absolute w-screen h-screen opacity-90 z-40"
            ></div>
            <div>
              <div className="z-50 absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto w-96 rounded-lg h-56 bg-yellow-400">
                <div
                  onClick={() => setIsModalOpen(false)}
                  className="font-bold text-gray-600 text-xl flex justify-end cursor-pointer mr-3"
                >
                  x
                </div>
                <div className="flex flex-col space-y-3 w-5/6 mx-auto">
                  <label className="font-bold">
                    Enter a valid youtube link:
                  </label>
                  <input onChange={(event) => setInputValue(event.target.value)} value={inputValue} className="rounded-md p-1 outline-none" type="text" />
                  <button
                    onClick={onClick}
                    className="p-3 bg-green-500 rounded-md text-white ml-auto"
                  >
                    SEND
                  </button>
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
