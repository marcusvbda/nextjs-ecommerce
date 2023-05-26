"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function Component({ children }: any) {
  const { data: session }: any = useSession();

  if (session === undefined) return <></>;

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <pre>{JSON.stringify(session, null, 2)}</pre>
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
