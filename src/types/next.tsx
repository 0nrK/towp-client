import { Server, Socket } from "net";
import { NextApiResponse as NextApiResponse_ } from "next";
import { Server as IO } from "socket.io";

declare global {
  export type NextApiResponseServerIO<T = any> = NextApiResponse_<T> & {
    socket: Socket & {
      server: Server & {
        io: IO;
      };
    };
  };
}
