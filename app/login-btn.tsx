"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "@mui/material/Button";

export default function Component() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <pre>{JSON.stringify(session, null, 2)}</pre>
        {/* <UserInformation data={session.user} /> */}
        <Button variant="contained" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
