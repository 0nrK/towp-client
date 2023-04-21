import React from "react";

const Message = ({ message }: any) => {

  return (
    <div className="px-3 py-2  flex flex-row">
      <div className="ml-1 text-sm break-all	 bg-white bg-opacity-10 p-3 rounded-lg text-white">
        <span className="mr-2 font-bold text-yellow-400">Nickname:</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Message;
