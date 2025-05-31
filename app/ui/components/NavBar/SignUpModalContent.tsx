import Input from "@/components/Input";
import React, { JSX } from "react";

type Props = {
  onSwitchToLogin: () => void;
};

export default function SignUpModalContent({
  onSwitchToLogin,
}: Props): JSX.Element {
  return (
    <div>
      <Input label="Full Name" type="text" className="mb-4" />
      <Input label="Email" type="email" className="mb-4" />
      <Input label="Password" type="password" className="mb-4" />
      <Input label="Confirm Password" type="password" className="mb-8" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-xs">
            Already have an account?{" "}
            <span
              className="hover:underline font-bold text-[#2A5F69] cursor-pointer"
              onClick={onSwitchToLogin}
            >
              Log In!
            </span>
          </p>
        </div>
        <button
          type="submit"
          className="font-bold px-6 h-[54px] rounded-full text-white bg-[#2A5F69]"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
