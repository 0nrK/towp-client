import { Inter } from "next/font/google";
import Chat from "../components/Chat/Chat";
import Playlist from "../components/Playlist/Playlist";
import VideoPlayer from "../components/VideoPlayer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between ">
      <div className="flex flex-col justify-center items-center md:flex-row space-y-3 space-x-9 mt-20">
        <div className="">
          <Playlist />
        </div>
        <div className="min-w-96 min-h-96 bg-gray-900">
          <VideoPlayer />
        </div>
        <div className="">
          <Chat />
        </div>
      </div>
    </main>
  );
}
