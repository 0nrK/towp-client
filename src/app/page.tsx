import { Inter } from "next/font/google";
import Chat from "../components/Chat/Chat";
import Playlist from "../components/Playlist/Playlist";
import VideoPlayer from "../components/VideoPlayer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex overflow-x-hidden mt-5 w-full flex-col  items-center justify-between">
      <div className="flex flex-col lg:flex-row space-y-12 lg:space-x-5 lg:space-y-0 max-w-96">
        <div className="w-full lg:w-68 ">
          <Playlist />
        </div>
        <div className="flex flex-col w-full md:flex-row justify-center space-y-12 lg:space-y-0 items-center  lg:space-x-5">
          <div className="bg-gray-900 md:min-w-96">
            <VideoPlayer />
          </div>
          <div className="w-full">
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
}
