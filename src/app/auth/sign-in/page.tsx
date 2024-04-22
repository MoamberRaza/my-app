"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      Welcome to Signin
      <button
        // className="p-2 bg-white rounded-md  border-blue-500 border  w-1/6 text-blue-500"
        onClick={async () => {
          await signIn("facebook");
        }}
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default SignIn;
