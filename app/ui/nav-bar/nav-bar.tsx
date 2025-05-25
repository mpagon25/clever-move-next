import Link from "next/link";
import React, { JSX } from "react";

export default function NavBar(): JSX.Element {
  return (
    <nav className="fixed w-full z-10 flex justify-center h-25 bg-white shadow-[2px_-2px_10px_rgba(3,3,3,0.1)]">
      <div className="flex max-w-[1168px] w-full items-center">
        <div className="flex flex-2">
          <p className="text-3xl font-bold ">Clever Move</p>
        </div>
        <div className="flex flex-3 font-bold justify-around">
          <Link href={"#hero-section"}>Home</Link>
          <Link href={"#discovery-section"}>Service</Link>
          <Link href={"#why-us-section"}>Why Us?</Link>
          <Link href={"#about-us-section"}>About us</Link>
        </div>
        <div className="flex flex-2 justify-end font-bold h-[54px]">
          <p className="h-full flex items-center pr-5 pl-5 mr-4">Login</p>
          <button
            type="button"
            className="w-[120px] h-full rounded-full text-white bg-[#2A5F69]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
