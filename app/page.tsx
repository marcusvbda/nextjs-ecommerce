import { authOptions } from "@/auth/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function MyApp() {
  const session: any = await getServerSession(authOptions);

  return (
    <>
      <h1 className="text-3xl font-bold color">Olá, {session.user.name}</h1>
    </>
  );
}
