import { io } from "socket.io-client";

// write socketio connection 
console.log(process.env.API_URL)
export const socket = io(`${process.env.API_URL}`, { transports: ['websocket'] });

