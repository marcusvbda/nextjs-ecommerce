"use client";

import { Button, Container, Link, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
  children: any;
}

export default function AdminTemplate(props: IProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  // const { data: session } = useSession();

  useEffect(() => {
    // console.log("logged session", session);
    setMounted(true);
  }, []);

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            onClick={() => router.push("/")}
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Vibbra Ecommerce
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/deals/create"
              sx={{ my: 1, mx: 1.5 }}
            >
              Criar negociações
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/deals"
              sx={{ my: 1, mx: 1.5 }}
            >
              Minhas negociações
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/invites"
              sx={{ my: 1, mx: 1.5 }}
            >
              Meus convites
            </Link>
          </nav>
          <Button
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => signOut()}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ pt: 8, pb: 6 }}>
        {props.children}
      </Container>
    </>
  );
}
