import React from "react";
import LoginBtn from "./login-btn";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function MyApp() {
  return (
    <main className={inter.className}>
      <LoginBtn />
    </main>
  );
}
