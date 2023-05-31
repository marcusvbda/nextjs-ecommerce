"use client";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Button from "../common/button";
import Link from "next/link";

interface IProps {
  children: any;
}

export default function AdminTemplate(props: IProps) {
  const route = usePathname();

  if (["/login"].includes(route)) return <>{props.children}</>;

  return (
    <main>
      <nav className="bg-gray-200 px-5 py-2 flex items-center gap-5">
        <Link href="/">
          <b className="text-xl">Home</b>
        </Link>
        <div className="ml-auto gap-5 flex">
          <Link href="/deals">Minhas negociações</Link>
          <Link href="/invites">Meus convites</Link>
        </div>
        <Button onClick={() => signOut()} className="px-10">
          Sair
        </Button>
      </nav>
      <div className="py-10 px-20">{props.children}</div>
    </main>
  );
}
