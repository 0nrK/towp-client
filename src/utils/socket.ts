import { io } from "socket.io-client";

// write socketio connection 
export const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`, { transports: ['websocket'] });

