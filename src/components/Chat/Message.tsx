import React from "react";

const Message = () => {
  return (
    <div className="px-3 py-5  flex flex-row">
      <div className="rounded-full">
        <div className="w-8 h-8  bg-yellow-500 text-center my-auto rounded-md">
          {" "}
        </div>
      </div>
      <div className="ml-3 text-sm break-all	 bg-white bg-opacity-10 p-3 rounded-lg text-white">
        <span className="mr-2 font-bold text-yellow-400">Nickname:</span>
        <span>
          Lorem ipsum ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum
          ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum
          ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum
          ipsumipsum ipsumipsum ipsum ipsum ipsum ipsum ipsum
        </span>
      </div>
    </div>
  );
};

export default Message;
