import React from "react";
import LoginBtn from "./login-btn";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default async function MyApp() {
  return (
    <main className={inter.className}>
      <nav style={{ padding: "5px 0" }}>
        <Link href="/test">test</Link>
      </nav>
      <LoginBtn />
    </main>
  );
}
