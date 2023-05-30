import React from "react";

const Message = ({ message, user }: { message: string; user: string }) => {
  return (
    <div className="px-3 max-w-8 py-2  flex flex-row">
      <div className="ml-1 text-lg bg-white bg-opacity-10 p-3 rounded-lg text-white">
        <span className="mr-2 font-bold text-yellow-400">{user}:</span>
        <span className={user == 'System'  ? 'text-red-500' : 'break-all'}>{message}</span>
      </div>
    </div>
  );
};

export default Message;
