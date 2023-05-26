"use client";

import { SessionProvider } from "next-auth/react";

export default function Proiders({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
