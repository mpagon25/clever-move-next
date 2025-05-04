import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed w-full flex justify-center h-25 shadow-[2px_-2px_10px_rgba(3,3,3,0.1)]">
      <div className="flex max-w-[1440px] w-full items-center">
        <div className="flex flex-2">
          <p className="text-3xl font-bold ">Clever Move</p>
        </div>

        <div className="flex flex-3 font-bold justify-around">
          <Link href={""}>Home</Link>
          <Link href={""}>Service</Link>
          <Link href={""}>About us</Link>
          <Link href={""}>Contact us</Link>
        </div>
        <div className="flex flex-2 justify-end font-bold h-[54px]">
          <p className="h-full flex items-center pr-5 pl-5 mr-4">Login</p>
          <button className="w-[120px] h-full rounded-full text-white bg-[#2A5F69]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
