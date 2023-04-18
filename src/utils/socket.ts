import { io } from "socket.io-client";

// write socketio connection 
export const socket = io("http://localhost:5000");

