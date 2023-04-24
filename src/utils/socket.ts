import { io } from "socket.io-client";

// write socketio connection 
export const socket = io(`${process.env.SOCKET_URL}`, { transports: ['websocket'] });

