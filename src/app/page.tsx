import { useSession, signIn, signOut, SignInOptions } from "next-auth/react";
import React, { HTMLAttributes } from "react";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  // let session = await getServerSession(options);
  // console.log("session : ", session);

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      Welcome To Next
    </div>
  );
}
