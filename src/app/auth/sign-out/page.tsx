"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <>
      Welcome to Signin
      <button
        className="p-2 bg-slate-500 rounded-md shadow-md text-white w-1/6"
        onClick={async () => {
          await signOut();
        }}
      >
        Signout
      </button>
    </>
  );
};

export default SignIn;
