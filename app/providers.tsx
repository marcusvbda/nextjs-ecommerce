"use client";
import { SessionProvider } from "next-auth/react";
interface IProps {
  session: any;
  children: any;
}

export default function Providers({ children, session }: IProps) {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  );
}
