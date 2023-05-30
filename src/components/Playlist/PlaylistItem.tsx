'use client';
import Image from "next/image";
import React, { useEffect } from "react";

const PlaylistItem = ({
  title,
  index,
  videoId,
  createdBy,
  duration,
}: {
  title: string;
  index: number;
  videoId: string;
  createdBy: string,
  duration: string;
}) => {
  return (
    <div className="cursor-pointer mt-3 rounded-md px-1 w-full hover:bg-opacity-10 hover:bg-white">
      <div className="flex flex-row  px-2 space-x-3 py-3 truncate">
        <Image
          width={50}
          height={50}
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="thumbnail"
          blurDataURL="data:image/jpeg;base64,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"
          placeholder="blur"
          className="text-center select-none  my-auto rounded-sm"
        />
        <div className="space-y-1 w-full select-none">
          <p className="text-sm text-white truncate my-auto">{title}</p>
          <div className="flex flex-row text-xs space-x-2  justify-between items-center">
            <span className="text-yellow-500 font-bold">{createdBy}</span>
            <span className="text-gray-400">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
