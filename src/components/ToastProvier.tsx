'use client'
import React from "react";
import { ToastContainer } from "react-toastify";

const ToastProvier = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ToastContainer />
      {children}
    </div>
  );
};

export default ToastProvier;
