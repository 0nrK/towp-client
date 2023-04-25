import { io } from "socket.io-client";

// write socketio connection 
export const socket = io(`${process.env.LOCAL_API_URL}`, { transports: ['websocket'] });

