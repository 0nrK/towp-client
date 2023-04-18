import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Screen from "../components/Screen";
import Chat from "../components/Chat/Chat";
import Playlist from "../components/Playlist/Playlist";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <NavBar />
      <div className="flex flex-row space-x-9 mt-20">
        <div className="">
          <Playlist />
        </div>
        <div className="min-w-96 min-h-96 bg-gray-900">
          <Screen />
        </div>
        <div className="">
          <Chat />
        </div>
      </div>
    </main>
  );
}
