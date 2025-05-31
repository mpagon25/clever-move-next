"use client";
import Link from "next/link";
import React, { JSX } from "react";
import Modal from "@/components/Modal";
import LoginModalContent from "./LoginModalContent";
import SignUpModalContent from "./SignUpModalContent";

export default function NavBar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoginModal, setIsLoginModal] = React.useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        {isLoginModal ? (
          <LoginModalContent onSwitchToSignUp={() => setIsLoginModal(false)} />
        ) : (
          <SignUpModalContent onSwitchToLogin={() => setIsLoginModal(true)} />
        )}
      </Modal>
    </>
  );
}
