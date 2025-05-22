import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center w-full h-60 shadow-[2px_-2px_10px_rgba(3,3,3,0.1)] pt-16">
      <div className="flex justify-center items-center h-full min-w-[1168px]">
        <div className="flex flex-1 flex-col h-full">
          <h4 className="text-2xl font-bold mb-2">Clever Move</h4>
          <p className="text-gray-500 text-sm">
            © 2023 Clever Move. All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 flex-col h-full">
          <p className="font-bold text-sm mb-2">Service</p>
          <p className="font-bold text-sm mb-2">About us</p>
          <p className="font-bold text-sm">Contact</p>
        </div>
        <div className="flex flex-1 flex-col h-full">
          <p className="font-bold text-sm mb-2">Privacy Policy</p>
          <p className="font-bold text-sm">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}
