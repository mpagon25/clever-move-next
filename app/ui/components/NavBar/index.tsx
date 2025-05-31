"use client";
import Link from "next/link";
import React, { JSX } from "react";
import Modal from "../Modal";
import Input from "../Input";

export default function NavBar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoginModal, setIsLoginModal] = React.useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const loginModalContent: JSX.Element = (
    <div>
      <Input label="Email" type="email" className="mb-4" />
      <Input label="Password" type="password" className="mb-8" />
      <div className="flex flex-row justify-between">
        <div className="flex-1 flex flex-col justify-between">
          <p className="hover:underline font-bold text-lg text-[#2A5F69]">
            Forgot Password?
          </p>
          <p className="text-xs">
            Not having an account yet? <span>Sign Up!</span>
          </p>
        </div>
        <button
          type="submit"
          className="font-bold px-6 h-[54px] rounded-full text-white bg-[#2A5F69]"
        >
          Log in
        </button>
      </div>
    </div>
  );
  const signUpModalContent: JSX.Element = <div>signup</div>;

  return (
    <>
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
            <button
              type="button"
              className="h-full flex items-center pr-5 pl-5 mr-4 bg-transparent"
              onClick={() => {
                setIsLoginModal(true);
                toggleModal();
              }}
              aria-label="Login"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLoginModal(false);
                toggleModal();
              }}
              aria-label="Sign Up"
              className="w-[120px] h-full rounded-full text-white bg-[#2A5F69]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={isLoginModal ? "Log In" : "Sign Up"}
      >
        {isLoginModal ? loginModalContent : signUpModalContent}
      </Modal>
    </>
  );
}
