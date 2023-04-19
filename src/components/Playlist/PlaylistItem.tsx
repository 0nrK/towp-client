import Image from "next/image";
import React from "react";

const PlaylistItem = ({ title, index }: { title: string; index: number }) => {
  return (
    <div className="cursor-pointer mt-3 px-2 hover:bg-opacity-10 hover:bg-white">
      <div className="flex flex-row px-2 py-3 truncate">
        <Image
          width={50}
          height={50}
          src={`https://img.youtube.com/vi/zU2_jPxz9q4/0.jpg`}
          alt="thumbnail"
          className="bg-yellow-500 text-center mr-3 my-auto rounded-sm"
        />
        <p className="text-sm text-white truncate my-auto  ">{`#${index + 1}`}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
