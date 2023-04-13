import React from "react";

const QueueDesc = () => {
  return (
    <div className="cursor-pointer mt-3 px-2 hover:bg-opacity-10 hover:bg-white">
      <div className="flex flex-row px-2 py-3 truncate">
        <div className="w-9 h-8  bg-yellow-500 text-center my-auto rounded-md">
          {" "}
        </div>
        <p className="text-sm text-white truncate my-auto ml-3 ">
          Video Video Video title feat singer
        </p>
      </div>
    </div>
  );
};

export default QueueDesc;
