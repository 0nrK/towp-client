'use client'
import React from "react";
import { ToastContainer } from "react-toastify";

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ToastContainer />
      {children}
    </div>
  );
};

export default ToastProvider;
