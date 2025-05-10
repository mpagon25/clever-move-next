import Image from "next/image";
import React, { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <div className="mb-40">
      <div className="mb-18 flex row w-full justify-between">
        <div className="mt-28">
          <div className="mb-10">
            <h3 className="text-[13px] font-bold pb-4">
              - Easy booking process
            </h3>
            <h1 className="text-7xl font-bold pb-8">
              Effortless <br />
              movig <br />
              solutions
            </h1>
            <h2 className="text-[20px]">Be clever. Move with us.</h2>
          </div>
          <div className="flex h-13 row font-bold">
            <button
              className="h-full min-w-30 pl-5 pr-5 mr-7 rounded-full bg-[#2A5F69] text-white"
              onClick={() => alert("hello")}
            >
              Book now!
            </button>
            <button className="h-full min-w-30 pl-5 pr-5 rounded-full border-2 border-[#2A5F69] text-[#2A5F69]">
              Explore service
            </button>
          </div>
        </div>
        <div className="mt-12">
          <Image
            src={"/HeroImage.png"}
            alt={"Hero Image"}
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <p className="text-center font-bold ">
          A moving company with flexible scheduling dates thats caters for your
          <br />
          tedious task of moving into your new home.
        </p>
      </div>
    </div>
  );
}
