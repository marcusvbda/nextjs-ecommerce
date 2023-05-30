import { authOptions } from "@/auth/authOptions";
import { TypographyClient } from "@/libs/mui";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";

export default async function MyApp() {
  const session: any = await getServerSession(authOptions);

  return (
    <>
      <TypographyClient component="h1" variant="h5">
        Olá, {session.user.name}
      </TypographyClient>
    </>
  );
}
