import Input from "@/components/Input";
import React, { JSX } from "react";

type Props = {
  onSwitchToSignUp: () => void;
};

export default function LoginModalContent({
  onSwitchToSignUp,
}: Props): JSX.Element {
  return (
    <div>
      <Input label="Email" type="email" className="mb-4" />
      <Input label="Password" type="password" className="mb-8" />
      <div className="flex flex-row justify-between">
        <div className="flex-1 flex flex-col justify-between">
          <p className="hover:underline font-bold text-lg text-[#2A5F69]">
            Forgot Password?
          </p>
          <p className="text-xs">
            Not having an account yet?{" "}
            <span
              className="hover:underline font-bold text-[#2A5F69] cursor-pointer"
              onClick={onSwitchToSignUp}
            >
              Sign Up!
            </span>
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
}
